import { Router, Response, Request } from "express";
import { Service as FooService } from "../service/foo.service";

export class Controller {
  public router: Router;
  private fooService: FooService;

  constructor() {
    this.router = Router();
    this.fooService = new FooService();
    this.routes();
  }

  public index = async (_: Request, res: Response) => {
    res.send(this.fooService.index());
  };
  public create(_: Request, res: Response) {
    res.send(this.fooService.create());
  }
  public update(_: Request, res: Response) {
    res.send(this.fooService.update());
  }
  public delete(_: Request, res: Response) {
    res.send(this.fooService.delete());
  }

  public routes() {
    this.router.get("/", this.index);
    this.router.post("/1", this.create);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.delete);
  }
}
