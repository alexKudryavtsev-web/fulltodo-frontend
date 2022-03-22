import $api from "../http";

class TodosService {
  static async read() {
    const { data } = await $api.get("/todos/read");
    return data;
  }

  static async removeTodo(id) {
    const { data } = await $api.post("/todos/removeTodo", { id });
    return data;
  }

  static async clear() {
    await $api.post("/todos/clear");
  }

  static async create() {
    const { data } = await $api.post("/todos/create");
    return data;
  }

  static async updateTodo(id, newTodo) {
    const { data } = await $api.post("/todos/updateTodo", { id, newTodo });
    return data;
  }
}

export default TodosService;
