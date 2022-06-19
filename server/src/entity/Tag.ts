import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column()
  public name!: string;
}
