import { TodoItem } from "../components/todo-item.js";
import  todosService  from "../services/todos.service.js";
import{getParams} from "../utils/get-params.js";

class TodosDetails {
  constructor(todosService) {
    this.id=getParams("id");
    this.$todoDetails = document.querySelector("#todo-details");
    this.todosService = todosService;
    this.todo = null;
  }

  async render() {
    this.todo = await this.todosService.fetchTodoById(this.id);
    this.$todoDetails.innerHTML = TodoItem(this.todo);
  }
}

const todosDetails = new TodosDetails(todosService);
todosDetails.render();