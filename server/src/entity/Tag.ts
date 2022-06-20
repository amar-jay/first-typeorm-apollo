import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ArticleEntity } from "./Article";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column()
  public name!: string;

  //   @Column({ nullable: true })
  //   @ManyToOne((_type) => ArticleEntity, (article) => article.tags)
  //   public article: ArticleEntity;
}
