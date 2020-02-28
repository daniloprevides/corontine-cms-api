import { GenericFilterService } from "./generic-filter.service";
import { FindParamsDto } from "./../dto/find-params.dto";
import { GenericServiceInterface } from "./interface.generic.service";
import { BasicEntity } from "./../entity/basic.entity";
import { Repository, FindManyOptions, FindOneOptions } from "typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import {
  paginate,
  Pagination,
  IPaginationOptions
} from "nestjs-typeorm-paginate";

import {
  NotFoundException,
  ConflictException,
  InternalServerErrorException
} from "@nestjs/common";

export abstract class GenericService<
  E extends BasicEntity,
  R extends Repository<E>,
  NEWDTO,
  UPDATEDTO
> implements GenericServiceInterface<E, NEWDTO, UPDATEDTO> {
  constructor(private readonly repository: R, private readonly name: string) {}

  protected getRelations(): Array<string> {
    return [];
  }

  @Transactional()
  public async getAll(
    findParamsDto: FindParamsDto,
    url?: string,
    relations?: Array<string>
  ): Promise<Pagination<E>> {
    let options = { relations: this.getRelations() } as FindManyOptions;
    let paginationOptions = {
      page: findParamsDto.page,
      limit: findParamsDto.limit,
      route: url
    } as IPaginationOptions;
    if (relations) options.relations = relations;
    //Building filters
    const whereQuery = [];
    const genericFilterService = new GenericFilterService();
    if (findParamsDto.q && findParamsDto.q.length) {
      whereQuery.push(
        ...genericFilterService.getRepositoryQuery(findParamsDto.q)
      );
    }

    if (findParamsDto.sort) {
      const sortOption = genericFilterService.getObjectFromQuery(findParamsDto.sort);
      options.order = sortOption;
    }

    if (whereQuery && whereQuery.length) options.where = whereQuery;

    return await paginate<E>(this.repository, paginationOptions, options);
  }

  @Transactional()
  public async findById(id: E["id"], relations?: Array<string>): Promise<E> {
    let options = { relations: this.getRelations() } as FindOneOptions;
    if (relations) options.relations = relations;

    const items: E | undefined = await this.repository.findOne(id, options);

    if (!items) {
      throw new NotFoundException(`${this.name} not found`);
    }
    return items;
  }

  @Transactional()
  public async add(item: NEWDTO): Promise<E> {
    try {
      return await this.repository.save(item);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY" || e.code === "SQLITE_CONSTRAINT") {
        throw new ConflictException(`${this.name} already exists`);
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async delete(id: E["id"]): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }

  @Transactional()
  public async update(id: E["id"], updateInfo: UPDATEDTO): Promise<E> {
    const item: E = await this.findById(id);
    if (!item) {
      throw new NotFoundException();
    }

    return await this.repository.save(updateInfo);
  }
}
