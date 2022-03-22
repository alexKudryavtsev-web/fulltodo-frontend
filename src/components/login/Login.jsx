import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import EmailInput from "../ui/emailInput/EmailInput";
import { login } from "../../store/reducers/userReducer";
import { store } from "../../store/index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler() {
    store.dispatch(login({ email, password }));
  }

  return (
    <Flex flexDirection={"column"} minWidth="40vw" maxWidth="70vw">
      <Box p={1}>
        <EmailInput value={email} setValue={setEmail} />
      </Box>
      <Box p={1}>
        <PasswordInput value={password} setValue={setPassword} />
      </Box>
      <Box p={1} alignSelf={"flex-end"}>
        <Button colorScheme="green" onClick={submitHandler}>
          Войти
        </Button>
      </Box>
    </Flex>
  );
}

export default Login;
