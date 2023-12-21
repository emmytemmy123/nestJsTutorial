import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'users'})
export class User{

@PrimaryGeneratedColumn({type: 'bigint'})
id: number;

@Column()
username: string;

@Column({ unique: true})
password: string;

@Column()
dateCreated: Date;

@Column({nullable:true})
authStrategy: string;


}