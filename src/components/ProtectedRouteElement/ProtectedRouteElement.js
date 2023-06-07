
import { Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { cookieGet } from "../../utils/functions.js";

export function ProtectedRouteElement({ element }) {
   const loggedIn = cookieGet("username") && cookieGet("username") !== "" ? true : false;
   return loggedIn ? element : <Navigate to="/login" replace />;
}
