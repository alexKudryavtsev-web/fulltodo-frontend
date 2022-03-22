import React, { useEffect } from "react";
import { store } from "../../store";
import { useSelector } from "react-redux";
import { read } from "../../store/reducers/todosReducer";
import getTodos from "../../store/selectors/getTodos";
import TodoItem from "./TodoItem";
import { Flex, Heading } from "@chakra-ui/react";
import TodoPanel from "./TodoPanel";

function Todos() {
  const todos = useSelector(getTodos);
  useEffect(() => {
    store.dispatch(read());
  }, []);
  return (
    <Flex direction="column" minWidth="40vw" maxWidth="90vw">
      <TodoPanel />
      {todos.length !== 0 ? (
        todos.map((todo) => <TodoItem {...todo} key={todo.id} />)
      ) : (
        <Heading size="md">to-do нет</Heading>
      )}
    </Flex>
  );
}

export default Todos;
