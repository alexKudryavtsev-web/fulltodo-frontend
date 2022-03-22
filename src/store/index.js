import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };
