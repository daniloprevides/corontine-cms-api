import { ComponentInfoDto } from './component-info.dto';
import { PluginInfoDto } from './plugin-info.dto';
import { PluginDto } from '../../plugin/dto/plugin.dto';
import { ApiProperty } from "@nestjs/swagger";

import { IsString } from "class-validator";

import { Expose } from "class-transformer";

export class GlobalInfoDto {
    @ApiProperty()
    @IsString()
    @Expose()
    description: string;

    @ApiProperty()
    @IsString()
    @Expose()
    version: string;

    @ApiProperty()
    @IsString()
    @Expose()
    documentation: string;

    @ApiProperty()
    @IsString()
    @Expose()
    url: string;

    @ApiProperty({type: () => PluginInfoDto})
    @IsString()
    @Expose()
    plugins: PluginInfoDto[];


    @ApiProperty({type: () => ComponentInfoDto})
    @IsString()
    @Expose()
    components: ComponentInfoDto[];


}