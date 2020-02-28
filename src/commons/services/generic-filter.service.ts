import { BasicEntity } from "./../entity/basic.entity";
import { MoreThan, Not, LessThan, LessThanOrEqual, MoreThanOrEqual, Equal, Like, Between, In, Any } from "typeorm";
import { BadRequestException } from "@nestjs/common";
import { isNull } from "util";

export class GenericFilterService {
  public getObjectFromQuery(q: string): any {
    let query = null;
    try {
      query = JSON.parse(q);
    } catch (ex) {
      throw new BadRequestException("Error parsing query filter ", ex);
    }

    return query;
  }

  private getValueFromObject(item: any) {    
    const objectKeys = Object.keys(item);
    if (objectKeys.length > 1) throw new BadRequestException("Field ${item} has more then one filter");

    const field = objectKeys[0] as string;
    const value = item[field] as any;

    return this.getValueFromFilter(field,value);
  }

  private getValueFromFilter(filter: string, value: any) {
    switch (filter) {
      case "$not": return Not(value);
      case "$eq": return Equal(value);
      case "$lt": return LessThan(value);
      case "$lte": return LessThanOrEqual(value);
      case "$gt": return MoreThan(value);
      case "$gte": return MoreThanOrEqual(value);
      case "$like": return Like(value);
      case "$bt": {
        if (value.length <= 1) throw new BadRequestException(`Value ${value} for field ${filter} needs to be an array`);
        return Between(value[0],value[1]);
      }
      case "$in": {
        if (!Array.isArray(value)) throw new BadRequestException(`Value ${value} for field ${filter} needs to be an array`);
        return In(value);
      }
      case "$any": {
        if (!Array.isArray(value)) throw new BadRequestException(`Value ${value} for field ${filter} needs to be an array`);
        return Any(value);
      }
      case "$isNull": {
        if (!Array.isArray(value)) throw new BadRequestException(`Value ${value} for field ${filter} needs to be an array`);
        return isNull(value);
      }
    }
  }

  getRepositoryQuery(
    q: string
  ) {
    const isObject = (val: any) => {
      if (val === null) {
        return false;
      }
      return typeof val === "function" || typeof val === "object";
    };

    const query = this.getObjectFromQuery(q);

    //Getting fields
    return Object.keys(query).map(i => {
      const value = query[i];
      //check if value is an object
      if (isObject(value)) {
        return {[i]: this.getValueFromObject(value)};
      }

      return {[i] : query[i]};
    });
  }
}
