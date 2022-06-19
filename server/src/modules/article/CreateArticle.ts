import { Tag } from "src/entity/Tag";
import { Field, InputType, Mutation, Arg, Resolver } from "type-graphql";
import { Article } from "../../entity/Article";

@InputType()
export class CreateArticleInput implements Partial<Article> {
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
