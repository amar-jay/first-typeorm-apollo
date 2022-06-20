"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const foo_resolver_1 = require("./resolvers/foo.resolver");
const article_resolver_1 = require("./resolvers/article.resolver");
const foo_controller_1 = require("./controller/foo.controller");
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.fooController = new foo_controller_1.Controller();
        this.routes();
    }
    async apolloServer() {
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema: await (0, type_graphql_1.buildSchema)({
                resolvers: [foo_resolver_1.FooResolver, article_resolver_1.ArticleResolver],
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
    configuration() {
        this.app.set("port", process.env.PORT || 3000);
    }
    async routes() {
        this.app.use("/api/foo", this.fooController.router);
    }
    async database() {
        await (0, typeorm_1.createConnection)({
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
    start() {
        this.database();
        this.apolloServer();
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server on port ${this.app.get("port")}`);
        });
    }
}
const app = new App();
app.start();
//# sourceMappingURL=index.js.map