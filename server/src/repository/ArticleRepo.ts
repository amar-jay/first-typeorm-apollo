import { EntityRepository, Repository } from "typeorm";
import { Article } from "./entity/Article";

@EntityRepository(Article)
export class ArticleRepo extends Repository<Article> {
  //  async findAll(): Promise<Article[]> {
  //    return this.find();
  //  }
}
