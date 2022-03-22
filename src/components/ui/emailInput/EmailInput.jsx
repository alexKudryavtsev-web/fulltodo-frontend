import { EmailIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

function EmailInput({ value, setValue }) {
  return (
    <InputGroup>
      <InputLeftAddon>
        <EmailIcon />
      </InputLeftAddon>
      <Input
        placeholder="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
  );
}

export default EmailInput;
