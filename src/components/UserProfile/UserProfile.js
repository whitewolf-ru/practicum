
import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../../styles.module.css";
import styles from './UserProfile.module.css';
import { cookieGet, userGet } from "../../utils/functions.js";
import { userProfileUpdate } from "../../services/actions/userActions.js";
import { userLoad } from "../../services/actions/userActions.js";


export function UserProfile() {

   const [name, setName] = React.useState(cookieGet("username"));

   const dispatch = useDispatch();

   React.useEffect(() => {
      console.log("useEffect: token", cookieGet("accessToken"));
      dispatch(userLoad(cookieGet("accessToken")));
   }, [dispatch])

   const [buttonsVisible, setButtonsVisibility] = useState(false);

   const onNameChange = e => {
      console.log("name", e.target.value);
      setName(e.target.value);
      console.log("name", name);
      setButtonsVisibility(true);
   };

   const [email, setEmail] = React.useState(cookieGet("email"));

   const onEmailChange = e => {
      setEmail(e.target.value);
      setButtonsVisibility(true);
   };

   const [password, setPassword] = React.useState('');

   const onPasswordChange = e => {
      setPassword(e.target.value);
      setButtonsVisibility(true);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit %s, %s, %s", name, email, password);
      dispatch(userProfileUpdate({ name: name, email: email, password: password, accessToken: cookieGet("accessToken") }));
   }

   const handleReset = (e) => {
      e.preventDefault();
      console.log("Reset %s, %s, %s", name, email, password);
      setName(cookieGet("username"));
      setEmail(cookieGet("email"));
      setPassword("");
   }

   return (
      <>
         <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
            <Input value={name} onChange={onNameChange} placeholder="Имя" />
            <Input value={email} onChange={onEmailChange} placeholder="E-mail" />
            <Input value={password} onChange={onPasswordChange} placeholder="Пароль" />
            <div className={styles_global.buttons} style={{ display: buttonsVisible ? "flex" : "hidden" }}>
               <Button htmlType="submit"> Сохранить </Button>
               <Button htmlType="reset" onClick={handleReset}> Отмена </Button>
            </div>
         </form>
      </>
   )
}
