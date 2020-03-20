import { Audit } from "./audit.entity";
import { PrimaryGeneratedColumn, Column } from "typeorm";
import { Expose } from "class-transformer";

export class BasicEntity extends Audit{
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    id: string;

    @Column({nullable: true, name: "client_id"})
    @Expose()
    clientId: string;

    @Column({nullable: true, type: Boolean, default: false})
    @Expose()
    deleted: boolean;
}