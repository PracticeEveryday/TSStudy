"use strict";
// class TodoItem {
//   public id: number; // private: 직접적인 접근 안 됨! , public :오픈!, protected
//   public task: string;
//   public complete: boolean;
Object.defineProperty(exports, "__esModule", { value: true });
//    초기화 해줘야 함
//   constructor(id: number, task: string, complete: boolean) {
//     this.id = id;
//     this.task = task;
//     this.complete = complete;
//   }
// }
// 타입 스크립트는 이렇게 생성자를 통해 초기화를 해야 되서 매번 두번 작성해야 되는 불상사가 나타남 쉽게 할려면?
// 생성자에 직접적으로 접근 지정자를 준다!!
// 이렇게 주면 프로퍼티로 바로 인식함
class TodoItem {
    constructor(id, task, 
    // default = false
    complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.default = TodoItem;
