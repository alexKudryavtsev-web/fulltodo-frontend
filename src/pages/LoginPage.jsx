import { Flex } from "@chakra-ui/react";
import React from "react";
import Login from "../components/login/Login";

function LoginPage() {
  return (
    <Flex justify={"center"} align={"center"}>
      <Login />
    </Flex>
  );
}

export default LoginPage;
