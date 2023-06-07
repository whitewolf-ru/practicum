import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import React from 'react';
import styles_global from "./../styles.module.css";
import styles from './login.module.css';
import { login } from "../services/actions/userActions.js";

const Login = () => {

   const dispatch = useDispatch();

   const [email, setEmail] = React.useState('');
   const onEmailChange = e => { setEmail(e.target.value) };

   const [password, setPassword] = React.useState('');
   const onPasswordChange = e => { setPassword(e.target.value) };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({ email: email, password: password }));
   }

   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Вход
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <div className={styles_global.inputs}>
                  <Input value={email} onChange={onEmailChange} placeholder="E-mail" />
                  <Input value={password} onChange={onPasswordChange} placeholder="пароль" />
                  <Button htmlType="submit"> Войти </Button>
               </div>
            </form>
            <p>
               Вы - новый пользователь?&nbsp;
               <Link to={{ pathname: `/register` }} className={`${styles.menulink} text text_color_inactive`}>
                  Зарегистрироваться
               </Link>
            </p>
            <p>
               Забыли пароль?&nbsp;
               <Link to={{ pathname: `/forgot-password` }} className={`${styles.menulink} text text_color_inactive`}>
                  Восстановить пароль
               </Link>
            </p>
         </div>
      </div>
   )
}

export default Login;
