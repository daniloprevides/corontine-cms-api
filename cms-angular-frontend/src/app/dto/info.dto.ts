import { PluginInfoDto } from './plugin.info.dto';
import { ComponentInfoDto } from './component.info.dto';

export class GlobalInfoDto {
  description: string;
  version: string;
  documentation: string;
  url: string;
  plugins: PluginInfoDto[];
  components: ComponentInfoDto[];
}
