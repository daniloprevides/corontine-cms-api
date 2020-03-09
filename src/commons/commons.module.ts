import { AllEntitiesEventSubscriber } from './../event-subscribers/all-entities-event-subscriber';
import { HttpModule } from "@nestjs/common";
import { HttpService } from "@nestjs/common";
import { AuthenticationService } from "./services/authentication-service";
import { Module } from "@nestjs/common";

@Module({
  imports: [HttpModule],
  providers: [AuthenticationService, AllEntitiesEventSubscriber],
  exports: [AuthenticationService]
})
export class CommonsModule {}
