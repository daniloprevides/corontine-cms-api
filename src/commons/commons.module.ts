import { ParserService } from './services/parser.service';
import { AllEntitiesEventSubscriber } from './../event-subscribers/all-entities-event-subscriber';
import { HttpModule } from "@nestjs/common";
import { HttpService } from "@nestjs/common";
import { AuthenticationService } from "./services/authentication-service";
import { Module } from "@nestjs/common";
import { RedirectorService } from './services/redirector.service';
import { PageBuilder } from './services/page-builder.service';

@Module({
  imports: [HttpModule],
  providers: [AuthenticationService, AllEntitiesEventSubscriber, ParserService, RedirectorService, PageBuilder],
  exports: [AuthenticationService, ParserService, RedirectorService, PageBuilder]
})
export class CommonsModule {}
