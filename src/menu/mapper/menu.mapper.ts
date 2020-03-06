import { MenuDto } from './../dto/menu.dto';
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { Menu } from '../entity/menu.entity';

@Injectable()
export class MenuMapper extends Mapper<Menu, MenuDto> {
  constructor() {
    super(Menu, MenuDto);
  }

  toDto(entityObject: Menu): MenuDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Menu[]): MenuDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: MenuDto): Menu {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: MenuDto[]): Menu[] {
    return super.toEntityList(dtoArray);
  }
}
