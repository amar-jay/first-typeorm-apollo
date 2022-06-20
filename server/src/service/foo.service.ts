import { FooRepo } from "../repository/foo.repo";

export class Service {
  public fooRepository: FooRepo;

  constructor() {
    // this.fooRepository = getConnection("foo").getRepository(FooRepo);
  }

  public index = () => {
    return "Hello index from Service!";
  };

  public create = () => {
    return "Hello create from Service!";
  };

  public update = () => {
    return "Hello update from Service!";
  };

  public delete = () => {
    return "Hello delete from Service!";
  };
}
