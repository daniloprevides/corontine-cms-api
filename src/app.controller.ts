import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request = require('request');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    return this.appService.getHello(url);
  }

}
