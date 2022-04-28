import TodoItem from "./TodoItem";

class TodoCollection {
  private nextId: number = 1;
  constructor(public userNmae: string, public todoItems: TodoItem[] = []) {}

  // 해당 id의 TodoItem이 없으면 에러 so |undefined 필요
  getTodoById(id: number): TodoItem | undefined {
    return this.todoItems.find((item) => item.id === id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default TodoCollection;
