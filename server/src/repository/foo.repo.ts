import { EntityRepository, Repository } from "typeorm";
// import { ArticleEntity } from "../entity/Article";
import { Foo as FooEntity } from "../entity/Foo";

@EntityRepository(FooEntity)
export class FooRepo extends Repository<FooEntity> {
  //  async findAll(): Promise<ArticleEntity[]> {
  //    return this.find();
  //  }
}
