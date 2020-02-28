import { GlobalInfoDto } from "../../commons/dto/global-info.dto";
import { PluginMapper } from "./../mapper/plugin.mapper";
import { RedirectorService } from "./../services/redirector.service";
import { Controller, Get, Req } from "@nestjs/common";
import Request = require("request");
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Redirector")
@Controller()
export class RedirectorController {
  constructor(private readonly service: RedirectorService) {}

  @Get()
  async getHello(@Req() req: Request): Promise<GlobalInfoDto> {
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;
    return await this.service.getInfo(url);
  }
}
