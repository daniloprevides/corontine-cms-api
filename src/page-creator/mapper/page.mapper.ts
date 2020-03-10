import { Page } from './../entity/page.entity';
import { Injectable } from "@nestjs/common";
import { Mapper } from "../../commons/mapper";
import { PageDto } from '../dto/page.dto';


@Injectable()
export class PageMapper extends Mapper<Page, PageDto> {
  constructor() {
    super(Page, PageDto);
  }

  toDto(entityObject: Page): PageDto {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Page[]): PageDto[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: PageDto): Page {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: PageDto[]): Page[] {
    return super.toEntityList(dtoArray);
  }
}
