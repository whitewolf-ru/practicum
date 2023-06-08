
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import { passwordReset } from "../services/actions/userActions.js";

function PasswordReset() {

   const dispatch = useDispatch();

   const [code, setCode] = React.useState('');
   const onCodeChange = e => { setCode(e.target.value) };

   const [password, setPassword] = React.useState('');
   const onPasswordChange = e => { setPassword(e.target.value) };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('password=%s, code=%s', password, code);
      dispatch(passwordReset({ password: password, token: code }));
   }
   
   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Сброс пароля
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <Input value={password} onChange={onPasswordChange} placeholder="пароль" />
               <Input value={code} onChange={onCodeChange} placeholder="код из письма" />
               <Button htmlType="submit"> Сохранить </Button>
            </form>
            <p>
               Вспомнили пароль?
               <Link to={{ pathname: `/login` }}>
                  Войти
               </Link>
            </p>
         </div>
      </div>
   )

}

export default PasswordReset;
