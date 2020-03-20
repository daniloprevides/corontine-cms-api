import { ConfigService, ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConfigService],
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [configuration]
        }),
      ]
    }).compile();


    

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Information Object', () => {
      let req = {
        protocol: 'http',
        originalUrl: '/',
        get : (val) => {
          if (val == 'host') return 'localhost:3000';
        } 
      } as any;
      const result = appController.getHello(req) as any;
      expect(result.description).toEqual('Corontine API');
    });
  });
});
