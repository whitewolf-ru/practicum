
// Всякая системная шняга
import React, { FC } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

// Крафтовые сырцы
import { ingredientsLoad } from "../../services/actions/ingredientsActions";
import AppHeader from "../AppHeader/AppHeader";
import Profile from "../../pages/profile";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ResetPassword from "../../pages/reset-password";
import ForgotPassword from "../../pages/forgot-password";
import Ingredient from "../../pages/ingredientPage";
import Feed from "../../pages/feedPage";
import IngredientWindow from "../../pages/IngredientWindow";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderShow from "../OrderShow/OrderShow";
import OrderShowPage from "../OrderShowPage/OrderShowPage";
import Modal from "../Modal/Modal";
import Main from "../Main/Main";
import { cookieGet } from "../../utils/functions";
import { UserProfile } from "../UserProfile/UserProfile";
import { UserHistory } from "../UserHistory/UserHistory";
import { UserLogout } from "../UserLogout/UserLogout";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { NotFound404 } from '../NotFound404/NotFound404';
import { LOGIN_SUCCESS } from '../../services/actions/userActions';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../services/actions/socketActions';
//import { TingredientsLoad } from "../../services/actions/ingredientsActions";
//import { AppDispatch } from "../../utils/types";
import { useSelector, useDispatch } from "../../hooks/index";

const App: FC = () => {
   const { password_reset_step } = useSelector(state => state.user);
   const location = useLocation();
   console.log("location",location);
   const dispatch = useDispatch();
   const source = location.state && location.state.background;
   const path = location.pathname;
   let method = "";

   if (path.indexOf("/feed") >= 0) method = "orders/all";
   if (path.indexOf("/profile/orders") >= 0) method = "orders";

   React.useEffect(() => {
      // Загрузка булок
      dispatch(ingredientsLoad());
      if (cookieGet("username") && cookieGet("username") !== "") dispatch({ type: LOGIN_SUCCESS });
      method !== "" ?
         dispatch({ type: WS_CONNECTION_START, method: method })
         :
         dispatch({ type: WS_CONNECTION_CLOSE })

   }, [dispatch, method]) // eslint-disable-line react-hooks/exhaustive-deps

   const isLoggedIn = useSelector(store => store.user.isLoggedIn);

   const navigate = useNavigate();

   const modalClose = () => { navigate("/", { replace: true }) }
   const windowClose = () => { navigate("/feed", { replace: true }) }
   const orderClose = () => { navigate("/profile/orders", { replace: true }) }

   return (
      <>
         <AppHeader />
         <Routes location={source || location}>

            <Route path='/ingredient/:id' element={<Ingredient />} />

            <Route path="/profile" element={<ProtectedRoute element={<Profile />} />}>
               <Route path="profile" element={<ProtectedRoute element={<UserProfile />} />} />
               <Route path="orders" element={<ProtectedRoute element={<UserHistory />} />} />
               <Route path="logout" element={<UserLogout />} />
            </Route>

            <Route path="/login" element={< ProtectedRoute element={<Login />} anonymous={true} />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<OrderShowPage />} />
            <Route path="/profile/orders/:id" element={<ProtectedRoute element={<OrderShow />} />} />
            <Route path="/register" element={< ProtectedRoute element={<Register />} anonymous={true} />} />
            <Route path="/reset-password" element={!isLoggedIn && password_reset_step === 2 ? <ResetPassword /> : <Navigate to="/" />} />

            <Route path="/forgot-password" element={
               !isLoggedIn ?
                  password_reset_step === 2 ? <Navigate to="/reset-password" /> : <ForgotPassword />
                  :
                  <Navigate to="/" />
            }>
            </Route>

            <Route path="/ingredient" element={<IngredientWindow />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound404 />} />

         </Routes>

         {/* Как бы "модальные" окна */}

         {
            source && (
               <Routes>
                  <Route path="/ingredient/:id"
                     element={
                        <Modal header="детали ингредиента" onClose={() => modalClose()}>
                           <Ingredient />
                        </Modal>
                     }
                  />
                  <Route path="/feed/:id"
                     element={
                        <Modal header="&nbsp;" onClose={() => windowClose()}>
                           <OrderShow />
                        </Modal>
                     }
                  />
                  <Route path="/profile/orders/:id"
                     element={
                        <Modal header="&nbsp;" onClose={() => orderClose()}>
                           <OrderShow />
                        </Modal>
                     }
                  />
                  <Route path="/orderProcess"
                     element={
                        <ProtectedRoute
                           element={
                              <Modal header="&nbsp;" onClose={() => modalClose()}>
                                 <OrderDetails />
                              </Modal>
                           }
                        />}
                  />
               </Routes>
            )
         }
      </>
   );
}

export default App;
