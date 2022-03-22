import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodosService from "../../services/TodosService";

const initialState = {
  todos: [],
};

const read = createAsyncThunk("todos/read", async (payload, thunkApi) => {
  return await TodosService.read();
});

const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (payload, thunkApi) => {
    return await TodosService.removeTodo(payload);
  }
);

const clear = createAsyncThunk("todos/clear", async (payload, thunkApi) => {
  await TodosService.clear();
});

const create = createAsyncThunk("todos/create", async (payload, thunkApi) => {
  return await TodosService.create();
});

const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload, thunkApi) => {
    return await TodosService.updateTodo(payload.id, payload.newTodo);
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(read.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    });
    builder.addCase(clear.fulfilled, (state) => {
      state.todos = [];
    });
    builder.addCase(create.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos.map((todo) => {
        if (todo === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    });
  },
});

export default todosSlice.reducer;
export { read, removeTodo, clear, create, updateTodo };
