import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { User } from "../entity/user.entity";
import { IsBoolean, IsOptional, IsArray } from "class-validator";
import { GroupDTO } from "./group.dto";

export class UserDTO {
  @ApiProperty({ type: Number })
  @Expose()
  id: User["id"];

  @ApiProperty({ type: String })
  @Expose()
  name: User["name"];

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  @IsOptional()
  @Expose()
  mustChangePassword: User["mustChangePassword"];

  @ApiProperty({ type: String })
  @Expose()
  email: User["email"];

  @ApiProperty({ type: String })
  @Expose()
  urlFacebook: User["urlFacebook"];

  @ApiProperty({ type: String })
  @Expose()
  urlInstagram: User["urlInstagram"];


  @ApiProperty({ type: () => GroupDTO })
  @IsArray()
  @IsOptional()
  @Expose()
  @Type(() => GroupDTO)
  groups: GroupDTO[];
}
