import { BASE_URL } from "../constants.js";

export class TodosService {
  constructor() {
    this.url = `${BASE_URL}/todos`;
  }

  fetchTodos() {
    return fetch(this.url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((todos) => {
        return todos;
      });
  }

  fetchTodoById(id) {
    return fetch(`${this.url}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((todos) => {
        return todos;
     
      });

  }
}
export default new TodosService();