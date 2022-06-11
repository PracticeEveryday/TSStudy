"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api"));
exports.default = ({ app }) => {
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("tiny"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, api_1.default)());
};
//# sourceMappingURL=express.js.map