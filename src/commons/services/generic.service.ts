import { AuthenticationService } from './authentication-service';
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
  constructor(protected readonly repository: R, protected readonly name: string) {}

  /**
   * This method should return relationship names, so typeorm can load them
   */
  protected getRelations(): Array<string> {
    return [];
  }  

  /**
   * This method should be overriden if you wanna make any changes on item. Called on Update and Insert Events
   */
  public setNeededFieldsOnChildren(clientId:string, item:E){}

  /**
   * This method should be overriden and used to validate an object before it is saved to database
   * Called only when a plugin type is token, not when is a request from user interface
   * @param clientId the clientId of the token 
   * @param id: the id of parent field
   */
  public abstract async validateParent(clientId:string, id:string) : Promise<boolean>;



  @Transactional()
  public async getAll(
    findParamsDto: FindParamsDto,
    url?: string,
    clientId?: string,
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

    if (clientId) options.where = [{clientId: clientId}];

    if (whereQuery && whereQuery.length) options.where = whereQuery;

    return await paginate<E>(this.repository, paginationOptions, options);
  }

  @Transactional()
  public async findById(id: E["id"], clientId?:string, relations?: Array<string>): Promise<E> {
    let options = { relations: this.getRelations() } as FindOneOptions;
    if (relations) options.relations = relations;

    if (clientId) options.where = [{clientId: clientId}];

    const items: E | undefined = await this.repository.findOne(id, options);

    if (!items) {
      throw new NotFoundException(`${this.name} not found`);
    }
    return items;
  }

  @Transactional()
  public async add(item: NEWDTO, clientId:string): Promise<E> {
    try {
      const newItem = item as unknown as E;
      if (clientId) newItem.clientId = clientId;

      this.setNeededFieldsOnChildren(clientId,item as any);

      return await this.repository.save(item);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY" || e.code === "SQLITE_CONSTRAINT") {
        throw new ConflictException(`${this.name} already exists`);
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  @Transactional()
  public async delete(id: E["id"], clientId?:string): Promise<void> {    
    let itemFound = await this.findById(id,clientId);
    if (!itemFound) throw new NotFoundException("Item not found for deletion");
    await this.repository.delete(itemFound.id);
  }

  @Transactional()
  public async update(id: E["id"], updateInfo: UPDATEDTO, clientId:string): Promise<E> {
    this.setNeededFieldsOnChildren(clientId,updateInfo as any);

    const item: E = await this.findById(id,clientId);
    if (!item) {
      throw new NotFoundException();
    }

    return await this.repository.save(updateInfo);
  }
}
