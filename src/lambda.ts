import path, { join } from 'path'
import { Handler, Context } from "aws-lambda";
import { Server } from "http";
import { createServer, proxy } from "aws-serverless-express";
import { eventContext } from "aws-serverless-express/middleware";

import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./commons/filters/http-exception.filter";
import { ValidationPipe, INestApplication } from "@nestjs/common";
import { RequestContextMiddleware } from "./middlewares/request-context-middleware";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
const express = require("express");

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this
// is likely due to a compressed response (e.g. gzip) which has not
// been handled correctly by aws-serverless-express and/or API
// Gateway. Add the necessary MIME types to binaryMimeTypes below
const binaryMimeTypes: string[] = [];

const StaticFileHandler = require("serverless-aws-static-file-handler");
const clientFilesPathView = path.join(__dirname, "../views/public/");
const clientFilesPathFrontend = path.join(__dirname, "../cms-frontend/public/");
const fileHandlerViews = new StaticFileHandler(clientFilesPathView);
const fileHandlerFrontend = new StaticFileHandler(clientFilesPathFrontend);

let cachedServer: Server;

async function buildSwagger(
  app: INestApplication,
  appConfigService: ConfigService
) {
  const apiConfig = appConfigService.get("api");
  const options = new DocumentBuilder()
    .setTitle(apiConfig.title)
    .setDescription(apiConfig.description)
    .setVersion(apiConfig.version)
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "access-token"
    )
    .addOAuth2()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(apiConfig.path, app, document);
  console.log(document);
}

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    require("dotenv-flow").config();
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp)
    );
    const appConfigService = nestApp.get<ConfigService>(ConfigService);
    await buildSwagger(nestApp, appConfigService);
    nestApp.use(eventContext());
    nestApp.useGlobalFilters(new HttpExceptionFilter());
    nestApp.useGlobalPipes(new ValidationPipe());
    nestApp.use(RequestContextMiddleware);
    nestApp.enableCors({
      origin: appConfigService.get("corsOrigin")
    });

    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    
  }
  return cachedServer;
}

// Export the handler : the entry point of the Lambda function
export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  const data = await proxy(cachedServer, event, context, "PROMISE").promise
  console.debug("From Server", data.body);
  return data;
};


export const components = async (event, context) => {
  //event.path = "index.html" // forcing a specific page for this handler, ignore requested path. This would serve ./data-files/index.html
  const data = await fileHandlerViews.get(event, context)
  return data;
}



export const frontend = async (event, context) => {
  if (event?.path === "" || !event.path){
    event.path = "index.html" // forcing a specific page for this handler, ignore requested path. This would serve ./data-files/index.html
  }

  const data = await fileHandlerFrontend.get(event, context)
  return data;
}