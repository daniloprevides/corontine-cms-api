import { ScopeEnum } from './../enum/scope.enum';
import { Scope } from './../entity/scope.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Scope)
export class ScopeRepository extends Repository<Scope> {
    async findOneByName(name:string){
        return this.findOne({where: {name: name}});
    }
}
