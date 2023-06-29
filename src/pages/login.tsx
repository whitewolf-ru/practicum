
import React, { FormEvent } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import styles from './login.module.css';
import { login } from "../services/actions/userActions";
import { useForm } from "..//hooks/UseForm";

//type TformData = {
//   values: { email: string, password: string}
//}

const Login = () => {

   const dispatch = useDispatch();

   const { values, handleChange } = useForm({ email: "", password: "" });

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(login(values) as any);
   }

   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Вход
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <div className={styles_global.inputs}>
                  <EmailInput name="email" value={values.email} onChange={handleChange} placeholder="E-mail" />
                  <PasswordInput name="password" value={values.password} onChange={handleChange} placeholder="пароль" />
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
