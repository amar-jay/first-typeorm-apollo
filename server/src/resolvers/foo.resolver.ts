import { Query, Resolver } from "type-graphql";

@Resolver()
export class FooResolver {
  @Query(() => String)
  async foo() {
    return "Hello World!";
  }
}
