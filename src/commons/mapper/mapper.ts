import { plainToClass } from 'class-transformer';

export class Mapper<E, D> {
  constructor(
    private entityClass: new () => E,
    private dtoClass: new () => D,
  ) {}

  toDto(entityObject: Partial<E>, exclude = true): D {
    return plainToClass<D, Partial<E>>(this.dtoClass, entityObject, {
      excludeExtraneousValues: exclude,
    });
  }

  toDtoList(entityArray: E[], exclude = true): D[] {
    return plainToClass<D, E>(this.dtoClass, entityArray, {
      excludeExtraneousValues: exclude,
    });
  }

  toPagination(entityArray: E[], exclude = true): D[] {
    return plainToClass<D, E>(this.dtoClass, entityArray, {
      excludeExtraneousValues: exclude,
    });
  }

  toEntity(dtoObject: Partial<D>, exclude = true): E {
    return plainToClass<E, Partial<D>>(this.entityClass, dtoObject, {
      excludeExtraneousValues: exclude,
    });
  }

  toEntityList(dtoArray: D[], exclude = true): E[] {
    return plainToClass<E, D>(this.entityClass, dtoArray, {
      excludeExtraneousValues: exclude,
    });
  }
}
