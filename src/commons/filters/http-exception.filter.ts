import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const request = ctx.getRequest<Request>();
    const error = exception.getResponse();
    const statusCode = (error as any)?.statusCode ? (error as any)?.statusCode : status;


    response.status(statusCode).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: error
    });
  }
}
