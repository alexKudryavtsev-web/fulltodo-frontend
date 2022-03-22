import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { store } from "../../store";
import { clear, create } from "../../store/reducers/todosReducer";

function TodoPanel() {
  function clearHandler() {
    store.dispatch(clear());
  }
  function createHandler() {
    store.dispatch(create());
  }
  return (
    <Flex alignSelf="flex-end" m={2}>
      <IconButton
        onClick={createHandler}
        icon={<AddIcon />}
        variant="ghost"
        colorScheme="green"
      />
      <IconButton
        onClick={clearHandler}
        icon={<DeleteIcon />}
        variant="ghost"
        colorScheme="red"
      />
    </Flex>
  );
}

export default TodoPanel;
