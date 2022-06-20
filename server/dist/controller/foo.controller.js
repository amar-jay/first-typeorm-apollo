"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
const foo_service_1 = require("../service/foo.service");
class Controller {
    constructor() {
        this.index = async (_, res) => {
            res.send(this.fooService.index());
        };
        this.router = (0, express_1.Router)();
        this.fooService = new foo_service_1.Service();
        this.routes();
    }
    create(_, res) {
        res.send(this.fooService.create());
    }
    update(_, res) {
        res.send(this.fooService.update());
    }
    delete(_, res) {
        res.send(this.fooService.delete());
    }
    routes() {
        this.router.get("/", this.index);
        this.router.post("/1", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=foo.controller.js.map