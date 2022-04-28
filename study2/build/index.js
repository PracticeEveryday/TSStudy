"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoConsole_1 = __importDefault(require("./view/todoConsole"));
const todoConsole = new todoConsole_1.default();
todoConsole.promptUser();
