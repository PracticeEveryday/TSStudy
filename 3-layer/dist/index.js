"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const express_1 = __importDefault(require("express"));
async function appStart() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app.listen(config_1.default.PORT, () => {
        console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${config_1.default.PORT}`);
    });
    app.get("/", (req, res, next) => {
        res.send("Hello, world!");
    });
}
appStart();
//# sourceMappingURL=index.js.map