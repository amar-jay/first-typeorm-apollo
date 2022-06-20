import { Query, Resolver } from "type-graphql";
import { Tag } from "../entity/Tag";

@Resolver()
export class TagResolver {
  @Query(() => [Tag])
  async tags(): Promise<Tag[]> {
    return [];
  }
}
