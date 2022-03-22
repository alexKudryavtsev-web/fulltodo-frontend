import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import getIsAuth from "../store/selectors/getIsAuth";
import { publicRoutes, privateRoutes } from "../router/index";

function AppRouter() {
  const isAuth = useSelector(getIsAuth);
  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </>
      ) : (
        <>
          {publicRoutes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </>
      )}
    </Routes>
  );
}

export default AppRouter;
