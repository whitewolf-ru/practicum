
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import { passwordForgot } from "../services/actions/userActions.js";

function ForgotPassword() {

   //const { password_reset_step } = useSelector(state => state.user);
   const dispatch = useDispatch();
   const [email, setEmail] = React.useState('');
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
               <EmailInput value={email} onChange={onEmailChange} placeholder="Укажите e-mail" />
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
