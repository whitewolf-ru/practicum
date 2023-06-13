
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../../styles.module.css";
import styles from './UserProfile.module.css';
import { cookieGet } from "../../utils/functions.js";
import { userProfileUpdate } from "../../services/actions/userActions.js";
import { userLoad } from "../../services/actions/userActions.js";

export function UserProfile() {

   const dispatch = useDispatch();

   React.useEffect(() => {
      console.log("useEffect");
      dispatch(userLoad(cookieGet("accessToken")));
   }, [])

   const user = useSelector((state) => state.user);
   if (!user.name) {
      user.name = "";
      user.email = "";
   }

   const [name, setName] = React.useState(user.name);
   const [email, setEmail] = React.useState(user.email);

   React.useEffect(() => {
      setName(user.name);
      setEmail(user.email);
   }, [user.name])

   const [buttonsVisible, setButtonsVisibility] = useState(false);

   const onNameChange = e => {
      console.log("name", e.target.value);
      setName(e.target.value);
      setButtonsVisibility(true);
   };

   const onEmailChange = e => {
      console.log("e.target.value", e.target.value);
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
            <EmailInput value={email} type={"email"} onChange={onEmailChange} placeholder="E-mail" />
            <PasswordInput value={password} onChange={onPasswordChange} placeholder="Пароль" />
            <div className={styles_global.buttons} style={{ display: buttonsVisible ? "flex" : "hidden" }}>
               <Button htmlType="submit"> Сохранить </Button>
               <Button htmlType="reset" onClick={handleReset}> Отмена </Button>
            </div>
         </form>
      </>
   )
}
