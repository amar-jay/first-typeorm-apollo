import { Tag } from "src/entity/Tag";
import { Field, InputType } from "type-graphql";
import { ArticleEntity } from "../../entity/Article";

@InputType()
export class CreateArticleInput implements Partial<ArticleEntity> {
  @Field()
  title!: string;

  @Field()
  content!: string;

  @Field()
  description: string;

  @Field()
  tag: Tag[];
}

export class CreateArticle {}
