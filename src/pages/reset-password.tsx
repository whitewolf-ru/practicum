
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import { passwordReset } from "../services/actions/userActions";

function PasswordReset() {

   const dispatch = useDispatch();

   const [code, setCode] = React.useState('');
   const onCodeChange = (e: FormEvent<HTMLInputElement>) => { setCode(e.currentTarget.value) };

   const [password, setPassword] = React.useState('');
   const onPasswordChange = (e: FormEvent<HTMLInputElement>) => { setPassword(e.currentTarget.value) };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('password=%s, code=%s', password, code);
      dispatch(passwordReset({ password: password, token: code }) as any);
   }
   
   return (
      <div className={styles_global.page_container}>
         <div className={styles_global.inputs}>
            Сброс пароля
            <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
               <PasswordInput value={password} onChange={onPasswordChange} placeholder="пароль" />
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
