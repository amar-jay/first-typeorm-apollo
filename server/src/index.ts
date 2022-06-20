import "reflect-metadata";
import express from "express";
import { FooResolver } from "./resolvers/foo.resolver";
import { TagResolver } from "./resolvers/tag.resolver";
import { ArticleResolver } from "./resolvers/article.resolver";
import { Controller as FooController } from "./controller/foo.controller";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
// import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";

// AppDataSource.initialize()
//   .then(async () => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await AppDataSource.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log(
//       "Here you can setup and run express / fastify / any other framework."
//     );
//   })
//   .catch((error) => console.log(error));

class App {
  private fooController: FooController;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.fooController = new FooController();

    this.routes();
  }

  private async apolloServer() {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [FooResolver, ArticleResolver],
        validate: false,
      }),
    });

    apolloServer
      .start()
      .then(() => {
        console.log(`🚀 Apollo Server ready`);
      })
      .catch((error) => console.error(error));

    const app = this.app;
    apolloServer.applyMiddleware({ app });
  }

  public configuration() {
    this.app.set("port", process.env.PORT || 3000);
  }

  public async routes() {
    this.app.use("/api/foo", this.fooController.router);
  }

  private async database() {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Abdel-manan1978",
      database: "typeorm",
      logging: true,
      entities: [__dirname + "/entity/*.ts"],
      synchronize: true,
    }).catch((error) => console.error(error));
  }
  public start() {
    this.database();
    this.apolloServer();
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}

const app = new App();
app.start();
