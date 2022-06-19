"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
(0, typeorm_1.useContainer)(typedi_1.Container);
const main = async () => {
    try {
        await (0, typeorm_1.createConnection)();
    }
    catch (error) {
        console.error(error);
    }
};
main();
//# sourceMappingURL=index.js.map