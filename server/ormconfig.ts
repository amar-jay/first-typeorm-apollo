module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "postgres",
  password: "Abdel-manan1978",
  database: "typeorm-graphql-typescript",
  synchronize: true,
  logger: "advanced-console",
  logging: false,
  cache: true,
  dropSchema: false,
  entities: ["dist/models/*.js"],
};
