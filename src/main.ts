import 'reflect-metadata';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './commons/filters/http-exception.filter';
import { join } from 'path';

async function buildSwagger(app:INestApplication, appConfigService:ConfigService){  
  const apiConfig = appConfigService.get('api');
  const options = new DocumentBuilder()
  .setTitle(apiConfig.title)
  .setDescription(apiConfig.description)
  .setVersion(apiConfig.version)
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(apiConfig.path, app, document);

}

async function bootstrap() {
  require('dotenv-flow').config();

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn','debug']
  });

  (app as any).setBaseViewsDir(join(__dirname, '..', 'views'));
  (app as any).setViewEngine('hbs');

  const appConfigService = app.get<ConfigService>(ConfigService);

  await buildSwagger(app,appConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  


  await app.listen(appConfigService.get('port'));
  

}

bootstrap();
