"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor() {
        this.index = () => {
            return "Hello index from Service!";
        };
        this.create = () => {
            return "Hello create from Service!";
        };
        this.update = () => {
            return "Hello update from Service!";
        };
        this.delete = () => {
            return "Hello delete from Service!";
        };
    }
}
exports.Service = Service;
//# sourceMappingURL=foo.service.js.map