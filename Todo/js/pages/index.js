import { TodoRow } from "../components/todo-row.js";
import todosService from "../services/todos.service.js";

class Index {
  constructor(todoService) {
    this.todos = [];
    this.$todos = document.querySelector("#todos");
    this.todoService = todoService;
  }

  async render() {
    this.todos = await this.todoService.fetchTodos();
    for (let todo of this.todos) {
      const row = TodoRow(todo);
      this.$todos.appendChild(row);
    }
  }
}

const index = new Index(todosService);
index.render();
