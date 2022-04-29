import * as inquirer from "inquirer";
import TodoCollection from "../service/TodoCollection";
import TodoItem from "../model/TodoItem";
import { data } from "../data";
import { Commands } from "../model/Commands";

class TodoConsole {
  private TodoCollection: TodoCollection;

  constructor() {
    const sampleTodos: TodoItem[] = data.map(
      (item) => new TodoItem(item.id, item.task, item.complete)
    );
    this.TodoCollection = new TodoCollection("My Todo List", sampleTodos);
  }

  displayTodoList(): void {
    console.log(
      // 몇 개의 항목을 해야합니다. 해야되는 항목만 나옴
      `======${this.TodoCollection.userName}=======` +
        `(${this.TodoCollection.getItemCounts().inComplete} items todo)`
    );
    this.TodoCollection.getTodoItems(true).forEach((item) =>
      item.printDetails()
    );
  }

  promptUser(): void {
    console.clear();
    this.displayTodoList();

    inquirer
      .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
      })
      .then((answers) => {
        if (answers["command"] !== Commands.Quit) {
          this.promptUser();
        }
      });
  }
}

export default TodoConsole;
