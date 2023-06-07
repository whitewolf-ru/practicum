
// Всякая системная шняга
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Крафтовые сырцы
import { ingredientsLoad } from "../../services/actions/ingredientsActions.js";
import Profile from "./../../pages/profile";
import Login from "./../../pages/login";
import Register from "./../../pages/register";
import ResetPassword from "./../../pages/reset-password";
import ForgotPassword from "./../../pages/forgot-password";
import Ingredient from "./../../pages/ingredientPage.jsx";
import IngredientWindow from "./../../pages/IngredientWindow.jsx";
import AppHeader from "./../AppHeader/AppHeader.jsx";
import Modal from "./../Modal/Modal.jsx";
import Main from "./../Main/Main.jsx";
import { cookieGet } from "../../utils/functions.js";
import { UserProfile } from "../UserProfile/UserProfile.js";
import { UserHistory } from "../UserHistory/UserHistory.js";
import { UserLogout } from "../UserLogout/UserLogout.js";
//import { ProvideAuth } from './../../services/auth';
import { ProtectedRouteElement } from "../ProtectedRouteElement/ProtectedRouteElement.js";
import { NotFound404 } from './../NotFound404/NotFound404';

function App() {
   const loggedIn = cookieGet("username") && cookieGet("username") !== "" ? true : false;
   console.log("app: loggedIn", loggedIn);
   const { password_reset_step } = useSelector(state => state.user);

   const location = useLocation();
   const source = location.state && location.state.background;

   // Загрузка булок
   const { ingredients, loadRequest, loadFailed } = useSelector(state => state.ingredientsItems);

   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(ingredientsLoad());
   }, [dispatch])

   console.log("%cAPP", "color:blue");

   return (
      <>
         <AppHeader />
         <Routes location={source || location}>

            <Route path="*" element={<NotFound404 />} />
            <Route path='/ingredient/:id' element={<Ingredient />} />

            <Route path="/profile" element={<ProtectedRouteElement element={< Profile />} />}>
               <Route path="profile" element={<ProtectedRouteElement element={< UserProfile />} />} />
               <Route path="orders" element={<UserHistory />} />
               <Route path="logout" element={<UserLogout />} />
            </Route>

            <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!loggedIn ? <Register /> : <Navigate to="/" />} />
            <Route path="/reset-password" element={!loggedIn && password_reset_step === 2 ? <ResetPassword /> : <Navigate to="/" />} />
            <Route path="/forgot-password" element={
               !loggedIn ?
                  password_reset_step === 2 ? <Navigate to="/reset-password" /> : <ForgotPassword />
                  :
                  <Navigate to="/" />
            }></Route>

            <Route path="/ingredient" element={<IngredientWindow />} />

            <Route path="/" element={<Main />} />

         </Routes>

         {/* Как бы "модальное" окно */}

         {source && (
            <Routes>
               <Route path="/ingredient/:id" element={<Ingredient />} />
            </Routes>
         )
         }

         <div id="react-modals"></div>
      </>
   );
}

export default App;
