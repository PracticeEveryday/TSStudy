"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollection {
    constructor(userNmae, todoItems = []) {
        this.userNmae = userNmae;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    // 해당 id의 TodoItem이 없으면 에러 so |undefined 필요
    getTodoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollection;
