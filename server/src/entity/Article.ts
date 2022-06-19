import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Tag } from "./Tag";

@ObjectType()
@Entity()
@Unique(["title"])
export class Article {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  public title!: string;

  @Field(() => String)
  @Column({ type: "varchar" })
  public description: string;

  @Field(() => String)
  @CreateDateColumn()
  public created_at!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  public updated_at!: Date;

  @Column()
  public content!: string;

  @ManyToOne((_type) => Tag, (tag: Tag) => tag.name)
  public tags: Tag[];
}
