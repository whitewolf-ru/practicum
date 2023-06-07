
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import {useLocation, useNavigate} from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from "./../components/AppHeader/AppHeader.jsx";
import styles_global from "./../styles.module.css";
//import styles './forgot-password.css';
import ResetPassword from './reset-password.jsx';
import { passwordForgot } from "../services/actions/userActions.js";

function ForgotPassword() {

   const { password_reset_step } = useSelector(state => state.user);
   const dispatch = useDispatch();
   const [email, setEmail] = React.useState('')
   const onEmailChange = e => { setEmail(e.target.value) }

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(passwordForgot({ email: email }));
   }

   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Восстановление пароля
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <Input value={email} onChange={onEmailChange} placeholder="Укажите e-mail" />
               <Button htmlType="submit"> Восстановить </Button>
            </form>
            <p>
               Уже зарегистрированы?
               &nbsp;
               <Link to={{ pathname: `/login` }}>
                  Войти
               </Link>
            </p>
         </div>
      </div>
   )
}

export default ForgotPassword;
