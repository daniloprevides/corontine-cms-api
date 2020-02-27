import { Audit } from "./audit.entity";
import { PrimaryGeneratedColumn } from "typeorm";
import { Expose } from "class-transformer";

export class BasicEntity extends Audit{
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    id: string;
}