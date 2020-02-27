import { GenericServiceInterface } from './interface.generic.service';
import { BasicEntity } from "./../entity/basic.entity";
import { Repository, FindManyOptions } from "typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
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
> implements GenericServiceInterface<E,NEWDTO,UPDATEDTO>{
  constructor(private readonly repository: R, private readonly name: string) {}

  protected getRelations() : Array<string> {
    return [];
  }

  @Transactional()
  public async getAll(relations?: Array<string>): Promise<E[]> {
    let options = {relations: this.getRelations()} as FindManyOptions;
    if (relations) options.relations = relations;
    return this.repository.find(options);
  }

  @Transactional()
  public async findById(id: E["id"], relations?: Array<string>): Promise<E> {
    let options = {relations: this.getRelations()} as FindManyOptions;
    if (relations) options.relations = relations;

    const items: E | undefined = await this.repository.findOne(id, {
      relations: ["scopes"]
    });

    if (!items) {
      throw new NotFoundException(`${this.name} not found`);
    }
    return items;
  }

  @Transactional()
  public async add(group: NEWDTO): Promise<E> {
    try {
      return await this.repository.save(group);
    } catch (e) {
      console.error(e);
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
