import TodoItem from "../model/TodoItem";
import { itemCounts } from "../model/itemCounts";
class TodoCollection {
  private nextId: number = 1;
  // Map<number, TodoItem> => Generic 이라는 건데 키(구분 할 수 있는)값과 실제 저장할 객체 키값은 id가 될것!
  private itemMap: Map<number, TodoItem>;

  // todoCollection을 만들 때 todoItems를 전달해 준다면 itemMap에 저장 될 수 있또록 할 수 있음.
  constructor(public userName: string, todoItems: TodoItem[] = []) {
    this.itemMap = new Map<number, TodoItem>();
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  // 해당 id의 TodoItem이 없으면 에러 so |undefined 필요
  getTodoById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }
  // includeComplete => true : 모든 할일 목록 반환
  // includeComplete => false : 완료 목록은 제외한 할일 목록 반환
  getTodoItems(includeComplete: boolean): TodoItem[] {
    // ... 전개 연산자 itemMap의 모든 벨류들을 리턴해주는 메소드 해서 list에 담아서 준다
    return [...this.itemMap.values()].filter(
      // itemMap의 모든 값중 includeComplete 가 true 만 다 반환 근데 False면 뒤에 item.complete이 true 이면 빠짐
      (item) => includeComplete || !item.complete
    );
  }

  // 해야할 일만 남을 것!!
  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getItemCounts(): itemCounts {
    return {
      // 전체 todo
      total: this.itemMap.size,
      // 완료되지 않은 todo
      inComplete: this.getTodoItems(false).length,
    };
  }

  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default TodoCollection;
