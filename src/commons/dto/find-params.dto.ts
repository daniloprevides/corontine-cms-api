import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
export class FindParamsDto {
  @ApiProperty({ type: Number, default: 0 })
  @IsString()
  @IsOptional()
  @Expose()
  page: number = 0;

  @ApiProperty({ type: Number, default: 10 })
  @IsString()
  @IsOptional()  
  @Expose()
  limit: number = 10;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()  
  @Expose()
  q: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()  
  @Expose()
  sort: string;

  @ApiProperty({ type: () => String })
  @IsString()
  @IsOptional()  
  @Expose()
  relations? : string;


}
