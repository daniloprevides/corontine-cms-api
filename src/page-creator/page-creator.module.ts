import { PageRepository } from "./repository/page.repository";
import { Page } from "./entity/page.entity";
import { PageController } from "./controllers/page.controller";
import { PageMapper } from "./mapper/page.mapper";
import { PageService } from "./services/page.service";
import { CommonsModule } from "./../commons/commons.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Page, PageRepository]), CommonsModule],
  providers: [PageService, PageMapper],
  controllers: [PageController],
  exports: [PageService]
})
export class PageCreatorModule {}
