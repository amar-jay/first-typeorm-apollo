import { Tag } from "src/entity/Tag";
import { Query, Resolver } from "type-graphql";
import { ArticleEntity } from "../entity/Article";

@Resolver()
export class ArticleResolver {
  @Query(() => [ArticleEntity])
  async getAllArticles(): Promise<ArticleEntity[]> {
    return [
      {
        id: 1,
        title: "Hello World",
        content: "Hello World",
        description: "Hello World",
        created_at: new Date(),
        updated_at: new Date(),
        // tags: [{ id: 1, name: "Hello World" }],
      },
    ];
  }
}
