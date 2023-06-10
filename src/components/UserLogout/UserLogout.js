import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../services/actions/userActions.js";

export function UserLogout() {

   console.log("logout");
   const dispatch = useDispatch();
   dispatch(logout());

   return (
      <>
         user_logout
      </>
   )
}
