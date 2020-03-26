import "reflect-metadata";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { HttpExceptionFilter } from "./commons/filters/http-exception.filter";
import { join } from "path";
import { RequestContextMiddleware } from "./middlewares/request-context-middleware";
import path = require("path");

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
}

async function bootstrap() {
  require("dotenv-flow").config();
  console.debug(process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn", "debug"]
  });
  const appConfigService = app.get<ConfigService>(ConfigService);

  (app as any).setBaseViewsDir(join(__dirname, "..", "views"));
  (app as any).setViewEngine("hbs");
  (app as any).useStaticAssets(join(__dirname, "../views/public"), {
    index: false,
    redirect: false,
    prefix: "/components"
  });
  app.enableCors({
    origin: appConfigService.get("corsOrigin")
  });

  await buildSwagger(app, appConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.use(RequestContextMiddleware);

  await app.listen(appConfigService.get("port"));
  
  return app;
}
export const app = bootstrap();
