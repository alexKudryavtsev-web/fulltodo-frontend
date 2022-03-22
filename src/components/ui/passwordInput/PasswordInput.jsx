import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

function PasswordInput({ value, setValue }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <InputGroup>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        value={value}
        placeholder="пароль"
        onChange={(e) => setValue(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button size="sm" h="1.75rem" onClick={toggleShow}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
