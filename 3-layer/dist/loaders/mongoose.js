"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
exports.default = async () => {
    mongoose_1.default
        .connect(config_1.default.MONGO_URL)
        .then(() => {
        console.log("mongodb is successfully connected");
    })
        .catch((error) => {
        console.error(error);
    });
};
//# sourceMappingURL=mongoose.js.map