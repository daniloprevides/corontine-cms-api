import { AuthenticationService } from "./../commons/services/authentication-service";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { RedirectorService } from "./services/redirector.service";
import { RedirectorController } from "./controllers/redirector.controller";
import { PluginMapper } from "./mapper/plugin.mapper";
import { FieldsMapper } from "./mapper/fields.mapper";
import { ComponentsMapper } from "./mapper/components.mapper";
import { AttributesMapper } from "./mapper/attributes.mapper";
import { PluginController } from "./controllers/plugin.controller";
import { FieldsController } from "./controllers/fields.controller";
import { ComponentsController } from "./controllers/components.controller";
import { AttributesController } from "./controllers/attributes.controller";
import { PluginService } from "./services/plugin.service";
import { FieldsService } from "./services/fields.service";
import { ComponentsService } from "./services/components.service";
import { AttributeService } from "./services/attributes.service";
import { AttributesRepository } from "./repository/attributes.repository";
import { FieldsRepository } from "./repository/fields.repository";
import { ComponentsRepository } from "./repository/components.repository";
import { PluginRepository } from "./repository/plugin.repository";
import { Attributes } from "./entity/attributes.entity";
import { Fields } from "./entity/fields.entity";
import { Components } from "./entity/components.entity";
import { Plugin } from "./entity/plugin.entity";
import { Module, HttpService, HttpModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Plugin,
      Components,
      Fields,
      Attributes,
      PluginRepository,
      ComponentsRepository,
      FieldsRepository,
      AttributesRepository
    ]),
    HttpModule
  ],
  controllers: [
    AttributesController,
    ComponentsController,
    FieldsController,
    PluginController,
    RedirectorController
  ],
  providers: [
    AttributeService,
    ComponentsService,
    FieldsService,
    PluginService,
    RedirectorService,
    AttributesMapper,
    ComponentsMapper,
    FieldsMapper,
    PluginMapper,
    AuthenticationService
  ],
  exports: [
    AttributeService,
    ComponentsService,
    FieldsService,
    PluginService,
    RedirectorService
  ]
})
export class PluginModule {}
