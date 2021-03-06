import { CommonsModule } from './../commons/commons.module';
import { MenuMapper } from './mapper/menu.mapper';
import { MenuService } from './services/menu.service';
import { MenuController } from './controllers/menu.controller';
import { MenuRepository } from './repository/menu.repository';
import { Menu } from './entity/menu.entity';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationService } from '../commons/services/authentication-service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Menu,
            MenuRepository
        ]),
        CommonsModule
      ],
      controllers: [
          MenuController       
      ],
      providers: [
        MenuService,
        MenuMapper,
      ],
      exports: [
        MenuService
      ]

})
export class MenuModule {
    
}
