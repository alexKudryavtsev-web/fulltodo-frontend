import { Box, Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import formatDate from "../../utils/formatDate";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { store } from "../../store";
import { removeTodo, updateTodo } from "../../store/reducers/todosReducer";
import useDebounce from "../../hooks/useDebounce";

function TodoItem({ id, date, title }) {
  const [value, setValue] = useState(title);
  const debounceUpdateTodo = useDebounce(() => {
    store.dispatch(updateTodo({ id, newTodo: { title: value } }));
  });

  function removeTodoHandler() {
    store.dispatch(removeTodo(id));
  }

  function changeValueHandler(e) {
    debounceUpdateTodo();
    setValue(e.target.value);
  }

  return (
    <Flex p={2} alignItems="center">
      <Box>
        <Heading as={"h6"} size="sm" m={1}>
          {formatDate(date)}
        </Heading>
      </Box>
      <Box flex={1} m={1}>
        <Input
          placeholder="заголовок to-do"
          value={value}
          onChange={changeValueHandler}
        />
      </Box>
      <Box m={1}>
        <IconButton
          onClick={removeTodoHandler}
          colorScheme="red"
          icon={<SmallCloseIcon />}
        />
      </Box>
    </Flex>
  );
}

export default TodoItem;
