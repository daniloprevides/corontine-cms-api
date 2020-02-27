import { Plugin } from './../entity/plugin.entity';
import { AttributesDto } from './../dto/attributes.dto';
import { Attributes } from './../entity/attributes.entity';
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { PluginDto } from '../dto/plugin.dto';

@Injectable()
export class PluginMapper extends Mapper<Plugin, PluginDto> {
  constructor() {
    super(Plugin, PluginDto);
  }

  toDto(entityObject: Plugin): PluginDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Plugin[]): PluginDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: PluginDto): Plugin {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: PluginDto[]): Plugin[] {
    return super.toEntityList(dtoArray);
  }
}
