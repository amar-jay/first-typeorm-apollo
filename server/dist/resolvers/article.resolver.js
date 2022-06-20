"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Article_1 = require("../entity/Article");
let ArticleResolver = class ArticleResolver {
    async getAllArticles() {
        return [
            {
                id: 1,
                title: "Hello World",
                content: "Hello World",
                description: "Hello World",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ];
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Article_1.ArticleEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "getAllArticles", null);
ArticleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ArticleResolver);
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.resolver.js.map