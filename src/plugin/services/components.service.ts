import { Plugin } from "./../entity/plugin.entity";
import { AuthenticationService } from "./../../commons/services/authentication-service";
import { TokenDto } from "./../../commons/dto/token.dto";
import { FindParamsDto } from "./../../commons/dto/find-params.dto";
import { PluginRepository } from "./../repository/plugin.repository";
import { NewPluginDto } from "./../dto/new-plugin.dto";
import { UpdateComponentsDto } from "./../dto/update-components.dto";
import { NewComponentsDto } from "./../dto/new-components.dto";
import { ComponentsRepository } from "../repository/components.repository";
import { Components } from "./../entity/components.entity";
import { GenericService } from "../../commons/services/generic.service";
import {
  Injectable,
  Inject,
  forwardRef,
} from "@nestjs/common";

@Injectable()
export class ComponentsService extends GenericService<
  Components,
  ComponentsRepository,
  NewComponentsDto,
  UpdateComponentsDto
> {
  constructor(
    @Inject(forwardRef(() => ComponentsRepository))
    public readonly componentsRepository: ComponentsRepository,
    @Inject(forwardRef(() => PluginRepository))
    public readonly pluginRepository: PluginRepository,
    @Inject(forwardRef(() => AuthenticationService))
    public readonly authenticationService: AuthenticationService
  ) {
    super(componentsRepository, "Components");
  }

  setNeededFieldsOnChildren(clientId:string, item:Components){
    item?.fields?.forEach(f => f.clientId = clientId);
  }

  public async validateParent(clientId:string, id:string): Promise<boolean>{
    return await this.pluginRepository.findOne({where: {clientId: clientId, id: id}}) != null;
  }

  protected getRelations(): Array<string> {
    return ["fields","plugin"];
  }
}
