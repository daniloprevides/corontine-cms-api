import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([
         
        ]),
        HttpModule
      ],
      controllers: [
       
      ],
      providers: [
      
      ],
      exports: [
        
      ]

})
export class MenuModule {
    
}
