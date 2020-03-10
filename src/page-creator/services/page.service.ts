import { GlobalInfoDto } from '../../commons/dto/global-info.dto';
import { RedirectorService } from '../../commons/services/redirector.service';
import { AuthenticationService } from "../../commons/services/authentication-service";
import { PageRepository } from "../repository/page.repository";
import { GenericService } from "../../commons/services/generic.service";
import {
  Injectable,
  Inject,
  forwardRef,
} from "@nestjs/common";
import { Page } from "../entity/page.entity";
import { NewPageDto } from "../dto/new-page.dto";
import { UpdatePageDto } from "../dto/update-page.dto";
import { Transactional } from "typeorm-transactional-cls-hooked";


@Injectable()
export class PageService extends GenericService<
  Page,
  PageRepository,
  NewPageDto,
  UpdatePageDto
> {
  public async validateParent(clientId: string, id: string): Promise<boolean> {
    return true;
  }

  constructor(
    @Inject(forwardRef(() => PageRepository))
    public readonly PageRepository: PageRepository,
    @Inject(forwardRef(() => AuthenticationService))
    public readonly authenticationService: AuthenticationService,
    @Inject(forwardRef(() => RedirectorService))
    public readonly redirectorService: RedirectorService,

  ) {
    super(PageRepository, "Page");
  }

  @Transactional()
  public async getApis(url:string) : Promise<GlobalInfoDto>{
    return await this.redirectorService.getGlobalInfoDto(url);
  }

  protected getRelations(): Array<string> {
    return [];
  }
}
