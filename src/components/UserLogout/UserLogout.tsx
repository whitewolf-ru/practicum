
import React from "react";

//import { useDispatch } from 'react-redux';
import { useDispatch } from "../../hooks/index";
import { logout } from "../../services/actions/userActions";

export function UserLogout() {

   const dispatch = useDispatch();
   dispatch(logout() as any);

   return (
      <>
         user_logout
      </>
   )
}
