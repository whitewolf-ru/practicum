import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import React from 'react';
import styles_global from "./../styles.module.css";
import styles from './register.module.css';
import { register } from "../services/actions/userActions.js";

const Register = () => {

   const dispatch = useDispatch();

   const [name, setName] = React.useState('');
   const onNameChange = e => { setName(e.target.value) };

   const [email, setEmail] = React.useState('');
   const onEmailChange = e => { setEmail(e.target.value) };

   const [password, setPassword] = React.useState('');
   const onPasswordChange = e => { setPassword(e.target.value) };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('name=%s, email=%s, password=%s', name, email, password);
      dispatch(register({ name: name, email: email, password: password }));
   }

   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Регистрация
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <Input value={name} onChange={onNameChange} placeholder="Имя" />
               <EmailInput value={email} onChange={onEmailChange} type="email" placeholder="E-mail" />
               <PasswordInput value={password} onChange={onPasswordChange} type="password" icon={"ShowIcon"} placeholder="Пароль" />
               <Button htmlType="submit"> Зарегистрироваться </Button>
            </form>
            <p>
               Уже зарегистрированы?&nbsp;
               <Link to={{ pathname: `/login` }} className={`${styles.menulink} text `}>
                  Войти
               </Link>
            </p>
         </div>
      </div>
   )
}

export default Register;
