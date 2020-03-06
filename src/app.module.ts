import { AllEntitiesEventSubscriber } from './event-subscribers/all-entities-event-subscriber';
import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { CommonsModule } from './commons/commons.module';
import { SecurityModule } from './security/security.module';
import configuration from './config/configuration';
import { MailerAsyncOptions } from '@nest-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { MailerModule } from '@nest-modules/mailer';
import { Connection } from 'typeorm';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { PluginModule } from './plugin/plugin.module';
import { MenuModule } from './menu/menu.module';

const databaseModule: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (appConfigService: ConfigService) =>{
    return appConfigService.get(process.env.NODE_ENV === 'test' ? 'testDatabase' : 'database')
  }
};

const mailerAsyncModule: MailerAsyncOptions = {
  useFactory: (appConfigService: ConfigService) =>
    appConfigService.get('mail'),
  imports: [ConfigModule],
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync(databaseModule),
    MailerModule.forRootAsync(mailerAsyncModule),
    CommonsModule,
    forwardRef(() => SecurityModule),
    forwardRef(() => PluginModule),
    MenuModule,                 
  ],
  controllers: [AppController],
  providers: [AppService, AllEntitiesEventSubscriber],
})
export class AppModule {
  constructor(private readonly connection: Connection){
    this.runMigration();
  }

  async runMigration(){
      initializeTransactionalContext() 
      await this.connection.synchronize();
      await this.connection.runMigrations();
  }
}
