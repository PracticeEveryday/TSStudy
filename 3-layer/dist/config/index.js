"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (!envFound) {
    throw new Error(".env 파일을 만들어 주세요");
}
exports.default = {
    // BackEnd 포트 번호
    PORT: process.env.PORT || 5000,
    // 데이터베이스 URI
    MONGO_URL: process.env.MONGO_URL || "MONGO_URL does not exist in .env file.",
    // api URI의 기본 경로
    api: {
        prefix: "/api",
    },
};
//# sourceMappingURL=index.js.map