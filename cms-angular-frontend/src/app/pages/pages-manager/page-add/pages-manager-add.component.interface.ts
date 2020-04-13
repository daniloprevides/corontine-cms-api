import { PageDTO } from 'src/app/dto/page.dto';
import { PluginDto } from 'src/app/dto/plugin.dto';
import { PageComponentItemDTO } from 'src/app/dto/page-component-item.dto';

export interface PagesManagerAddComponentInterface {
  data: PageDTO,
  pages: Array<PageDTO>,
  sources: Array<PluginDto>,
  selected:PageDTO,
  permissions:Array<string>,
  components:Array<PageComponentItemDTO>,
}
