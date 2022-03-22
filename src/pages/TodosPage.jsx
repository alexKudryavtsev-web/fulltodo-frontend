import { Flex } from "@chakra-ui/react";
import React from "react";
import Todos from "../components/todos/Todos";

function TodosPage() {
  return (
    <Flex justify="center" align="center">
      <Todos />
    </Flex>
  );
}

export default TodosPage;
