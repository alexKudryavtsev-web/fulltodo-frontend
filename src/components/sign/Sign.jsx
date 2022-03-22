import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import EmailInput from "../ui/emailInput/EmailInput";

function Sign() {
  const [isSend, setIsSend] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler() {
    setIsSend(true);
    await AuthService.registration(email, password);
  }

  if (isSend) {
    return (
      <Box>
        <Heading size="md">На почту {email} отправлено письмо.</Heading>
      </Box>
    );
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
        <Button colorScheme="red" onClick={submitHandler}>
          Регистрация
        </Button>
      </Box>
    </Flex>
  );
}

export default Sign;
