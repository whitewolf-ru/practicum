
import { Navigate } from "react-router-dom";

import { API } from "../settings.js";
import { checkResponse } from "../../utils/burger-api.js";

export const USER_LOGIN = 'USER_LOGIN';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST';
export const PASSWORD_FORGOT_ERROR = 'PASSWORD_FORGOT_ERROR';
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';

export const PROFILE_UPDATE_REQUEST = 'PROFILE_UPDATE_REQUEST';
export const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR';
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';

export const USER_LOAD_REQUEST = 'USER_LOAD_REQUEST';
export const USER_LOAD_ERROR = 'USER_LOAD_ERROR';
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';

/*
╒═╤══════════════════════════╤═╕
│ │ Регистрация пользователя │ │
╘═╧══════════════════════════╧═╛
*/
export function register(data) {

   return function (dispatch) {
      dispatch({ type: REGISTER_REQUEST })

      console.log("action", data);

      fetch(`${API}/auth/register`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password, name: data.name })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               console.log("res", res);
               dispatch({
                  type: REGISTER_SUCCESS,
                  //orderId: res.order.number
               })
            } else {
               dispatch({ type: REGISTER_ERROR });
            }
         })

         .catch(err => {
            dispatch({ type: REGISTER_ERROR });
         })

   }
}

/*
╒═╤══════╤═╕
│ │ Вход │ │
╘═╧══════╧═╛
*/

export function login(data) {

   return function (dispatch) {
      dispatch({ type: LOGIN_REQUEST })

      console.log("login action", data);

      fetch(`${API}/auth/login`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               console.log("0k", res);
               document.cookie = `accessToken=${res.accessToken}`;
               document.cookie = `refreshToken=${res.refreshToken}`;
               document.cookie = `username=${res.user.name}`;
               document.cookie = `email=${res.user.email}`;
               console.log("cookie", document.cookie);
               dispatch({ type: LOGIN_SUCCESS });
            } else {
               dispatch({ type: LOGIN_ERROR });
            }
         })

         .catch(err => {
            dispatch({ type: LOGIN_ERROR });
         })

   }
}

/*
╒═╤═════════════════════════╤═╕
│ │ Запрос на сброс пароля  │ │
╘═╧═════════════════════════╧═╛
*/
export function passwordForgot(data) {

   return function (dispatch) {
      dispatch({ type: PASSWORD_FORGOT_REQUEST })

      fetch(`${API}/password-reset`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               dispatch({ type: PASSWORD_FORGOT_SUCCESS });
            } else {
               dispatch({ type: PASSWORD_FORGOT_ERROR });
            }
         })

         .catch(err => {
            dispatch({ type: PASSWORD_FORGOT_ERROR });
         })

   }
}

/*
╒═╤══════════════╤═╕
│ │ Сброс пароля │ │
╘═╧══════════════╧═╛
*/
export function passwordReset(data) {

   return function (dispatch) {
      dispatch({ type: PASSWORD_RESET_REQUEST })

      console.log("action", data);

      fetch(`${API}/password-reset/reset`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: data.password, token: data.token })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               console.log("res", res);
               alert("Пароль, судя по всему, изменён!");
               dispatch({
                  type: PASSWORD_RESET_SUCCESS,
                  //orderId: res.order.number
               })
            } else {
               alert("Шёл трамвай девятый номер");
               dispatch({ type: PASSWORD_RESET_ERROR });
            }
         })

         .catch(err => {
            alert("На площадке кто-то помер");
            dispatch({ type: PASSWORD_RESET_ERROR });
         })

   }
}

/*
╒═╤═════════════════════╤═╕
│ │ Обновление профайла │ │
╘═╧═════════════════════╧═╛
*/
export function userProfileUpdate(data) {

   return function (dispatch) {
      dispatch({ type: PROFILE_UPDATE_REQUEST })

      fetch(`${API}/auth/user`,
         {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: data.name, email: data.email, password: data.password, token: data.accessToken })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               console.log("res", res);
               alert("Профайл, наверное, изменён!");
               dispatch({
                  type: PASSWORD_RESET_SUCCESS
               })
            } else {
               alert("Какая-то шляпа с реквизитами!");
               dispatch({ type: PASSWORD_RESET_ERROR });
            }
         })

         .catch(err => {
            alert("Вообще ничего не вышло!");
            dispatch({ type: PASSWORD_RESET_ERROR });
         })

   }
}

/*
╒═╤════════════════════════════════╤═╕
│ │ Загрузка данных о пользователе │ │
╘═╧════════════════════════════════╧═╛
*/
export function userLoad(token) {

   return function (dispatch) {
      dispatch({ type: USER_LOAD_REQUEST })
      console.log("userLoad() action", token);
      fetch(`${API}/auth/user`,
         {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', authorization: token },
         })
         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               console.log("res", res);
               dispatch({
                  type: USER_LOAD_SUCCESS
               })
            } else {
               console.log("Какая-то шляпа с реквизитами!", res);
               dispatch({ type: USER_LOAD_ERROR });
            }
         })

         .catch(err => {
            console.log("Облом!", err);
            //dispatch({ type: USER_LOAD_ERROR });
            if (err.message == "jwt expired") {
               console.log("Жетончик протух");
            }
         })
   }
}
