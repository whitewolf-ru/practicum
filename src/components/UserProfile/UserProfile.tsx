
import React, { useState, FormEvent } from 'react';
//import { useDispatch, useSelector } from "react-redux";
import { useSelector, useDispatch } from "../../hooks/index";

import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../../styles.module.css";
import { cookieGet } from "../../utils/functions";
import { userProfileUpdate } from "../../services/actions/userActions";
import { userLoad } from "../../services/actions/userActions";

export function UserProfile() {

   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(userLoad(cookieGet("accessToken")) as any);
   }, [])

   const user = useSelector((state: any) => state.user);
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

   const onNameChange = (e: FormEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value);
      setButtonsVisibility(true);
   };

   const onEmailChange = (e: FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
      setButtonsVisibility(true);
   };

   const [password, setPassword] = React.useState('');

   const onPasswordChange = (e: FormEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value);
      setButtonsVisibility(true);
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      dispatch(userProfileUpdate({ name: name, email: email, password: password, accessToken: cookieGet("accessToken") }) as any);
   }

   const handleReset = (e: void) => {
      //e.preventDefault();
      setName(cookieGet("username"));
      setEmail(cookieGet("email"));
      setPassword("");
   }

   return (
      <>
         <form onSubmit={handleSubmit} className={`${styles_global.inputs} text text_color_inactive`}>
            <Input value={name} onChange={onNameChange} placeholder="Имя" />
            <EmailInput value={email} onChange={onEmailChange} placeholder="E-mail" />
            <PasswordInput value={password} onChange={onPasswordChange} placeholder="Пароль" />
            <div className={styles_global.buttons} style={{ display: buttonsVisible ? "flex" : "hidden" }}>
               <Button htmlType="submit"> Сохранить </Button>
               <Button htmlType="reset" onClick={handleReset}> Отмена </Button>
            </div>
         </form>
      </>
   )
}
