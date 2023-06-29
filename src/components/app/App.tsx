
// Всякая системная шняга
import React from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Крафтовые сырцы
import { ingredientsLoad } from "../../services/actions/ingredientsActions";
import AppHeader from "../AppHeader/AppHeader";
import Profile from "../../pages/profile";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ResetPassword from "../../pages/reset-password";
import ForgotPassword from "../../pages/forgot-password";
import Ingredient from "../../pages/ingredientPage";
import IngredientWindow from "../../pages/IngredientWindow";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import Main from "../Main/Main";
import { cookieGet } from "../../utils/functions";
import { UserProfile } from "../UserProfile/UserProfile";
import { UserHistory } from "../UserHistory/UserHistory";
import { UserLogout } from "../UserLogout/UserLogout";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { NotFound404 } from '../NotFound404/NotFound404';
import { LOGIN_SUCCESS } from '../../services/actions/userActions';

function App() {

   const { password_reset_step } = useSelector((state: any) => state.user);
   const location = useLocation();
   const dispatch: any = useDispatch();
   const source = location.state && location.state.background;

   // Загрузка булок
   //const { ingredients, loadRequest, loadFailed } = useSelector(state => state.ingredientsItems);

   React.useEffect(() => {
      dispatch(ingredientsLoad());
      if (cookieGet("username") && cookieGet("username") !== "") dispatch({ type: LOGIN_SUCCESS });
   }, [dispatch])

   const isLoggedIn = useSelector((store: any) => store.user.isLoggedIn);

   const navigate = useNavigate();

   const modalClose = () => { navigate("/", { replace: true }) }

   return (
      <>
         <AppHeader />
         <Routes location={source || location}>

            <Route path='/ingredient/:id' element={<Ingredient />} />

            <Route path="/profile" element={<ProtectedRoute element={<Profile />} />}>
               <Route path="profile" element={<ProtectedRoute element={<UserProfile />} />} />
               <Route path="orders" element={<UserHistory />} />
               <Route path="logout" element={<UserLogout />} />
            </Route>

            <Route path="/login" element={< ProtectedRoute element={<Login />} anonymous={true} />} />
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

         {/* Как бы "модальное" окно */}

         {
            source && (
               <Routes>
                  <Route path="/ingredient/:id"
                     element={
                        //<Modal className="window" header="детали ингредиента" onClose={() => modalClose()}>
                        <Modal header="детали ингредиента" onClose={() => modalClose()}>
                           <Ingredient />
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
