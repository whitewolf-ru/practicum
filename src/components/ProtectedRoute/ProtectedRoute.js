//
//import { Route, Navigate } from 'react-router-dom';
//import { useEffect, useState } from 'react';
//
//import { cookieGet } from "../../utils/functions.js";
//
//export function ProtectedRouteElement({ element }) {
//   const loggedIn = cookieGet("username") && cookieGet("username") !== "" ? true : false;
//   return loggedIn ? element : <Navigate to="/login" state={{ from: location }} />;
//}

import { useSelector } from "react-redux";
import { useLocation, Navigate } from 'react-router-dom';

export function ProtectedRoute({ element, anonymous = false }) {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  const location = useLocation();
  const from = location.state?.from || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    // ...то отправляем его на предыдущую страницу
    // console.log("Только для неавторизованных");
    return <Navigate to={ from } />;
  }

// console.log("anonymous",anonymous);
// console.log("isLoggedIn",isLoggedIn);

  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    // ...то отправляем его на страницу логин
    // console.log("Нужна авторизация");
    return <Navigate to="/login" state={{ from: location}}/>;
  }

    console.log("0k");
  // Если все ок, то рендерим внутреннее содержимое
  return element;
}