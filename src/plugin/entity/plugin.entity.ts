import { PluginTypeEnum } from '../../commons/enum/plugin-type.enum';
import { BasicEntity } from './../../commons/entity/basic.entity';
import { Components } from './components.entity';
import { TokenTypeEnum } from './../enum/token-type.enum';
import { PluginEnvironmentEnum } from './../enum/environment.enum';
import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';

@Entity()
export class Plugin extends BasicEntity{

  @Column({
    nullable: false,
    unique: true
  })
  @Expose()
  name: string;

  @Column({ nullable: true })
  @Expose()
  description: string;

  @Column({ nullable: false , name: "api_url"})
  @Expose()
  apiUrl: string;

  @Column({ nullable: true , name: "add_url"})
  @Expose()
  addUrl: string;

  @Column({ nullable: true, name: "remove_url"  })
  @Expose()
  removeUrl: string;

  @Column({ nullable: true, name: "update_url" })
  @Expose()
  updateUrl: string;

  @Column({ nullable: true , name: "get_url"})
  @Expose()
  getUrl: string;

  @Column({ nullable: true , name: "get_all_url"})
  @Expose()
  getAllUrl: string;

  @Column({ nullable: true, name: "access_token" })
  @Expose()
  accessToken: string;

  @Column({ nullable: true, name: "client_id" })
  @Expose()
  clientId: string;

  @Column({ nullable: true, name: "token_type" })
  @Expose()
  tokenType: TokenTypeEnum;

  @Column({ nullable: false, name: "plugin_type", default: PluginTypeEnum.CLIENT })
  @Expose()
  pluginType: PluginTypeEnum;

  @Column({ nullable: false, default: true , type: Boolean})
  @Expose()
  enabled: boolean;

  @Column({ nullable: false, default: "production" })
  @Expose()
  environment: PluginEnvironmentEnum;

  @Expose()
  @OneToMany(() => Components, (component:Components) => component.plugin)
  @JoinColumn()
  components: Components[];
}
