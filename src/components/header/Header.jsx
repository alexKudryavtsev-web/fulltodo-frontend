import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../../store";
import { logout } from "../../store/reducers/userReducer";
import getIsAuth from "../../store/selectors/getIsAuth";

function Header() {
  const isAuth = useSelector(getIsAuth);

  async function logoutHandler() {
    store.dispatch(logout());
  }

  return (
    <Flex bg="gray.100" marginBottom={4} p={2} alignItems="center">
      <Heading size="lg">fulltodo</Heading>
      <Spacer />
      {isAuth ? (
        <Link to="/">
          <Button variant="ghost" onClick={logoutHandler} colorScheme="green">
            log out
          </Button>
        </Link>
      ) : (
        <>
          <Link to="/">
            <Button variant="ghost" colorScheme="green">
              login
            </Button>
          </Link>
          <Link to="sign">
            <Button variant="ghost" colorScheme="red">
              sign up
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
}

export default Header;
