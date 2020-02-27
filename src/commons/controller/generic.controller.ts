import { Mapper } from "../mapper/mapper";
import { BasicEntity } from "../entity/basic.entity";
import { GenericServiceInterface } from "../services/interface.generic.service";
import { Logger, Param, Body } from "@nestjs/common";

export abstract class GenericController<
  E extends BasicEntity,
  NEWDTO,
  UPDATEDTO,
  DTO,
  MAPPER extends Mapper<E, DTO>,
  S extends GenericServiceInterface<E, NEWDTO, UPDATEDTO>
> {
  logger: Logger;

  constructor(
    protected readonly service: S,
    protected readonly mapper: MAPPER,
    protected readonly name: string
  ) {
    this.logger = new Logger(this.name);
  }

  public async getAll(): Promise<DTO[]> {
    return this.mapper.toDtoList(await this.service.getAll());
  }

  public async getById(@Param("id") id: E["id"]): Promise<DTO> {
    return this.mapper.toDto(await this.service.findById(id));
  }

  async add(
    // eslint-disable-next-line @typescript-eslint/camelcase
    @Body() newItem: NEWDTO
  ): Promise<DTO> {
    let item = await this.service.add(newItem);
    return this.mapper.toDto(item);
  }

  public async update(
    @Param("id") id: E["id"],
    @Body() updateInfo: UPDATEDTO
  ): Promise<DTO> {
    return this.mapper.toDto(await this.service.update(id, updateInfo));
  }

  public async delete(@Param("id") id: E["id"]): Promise<void> {
    return await this.service.delete(id);
  }
}
