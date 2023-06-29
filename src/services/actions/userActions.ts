
import { api } from "../../utils/burger-api";

import { cookieGet, cookieDelete } from "../../utils/functions";

// Роли исполняют:
export const USER_LOGIN = 'USER_LOGIN';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const TOKEN_UPDATE_REQUEST = 'TOKEN_UPDATE_REQUEST';
export const TOKEN_UPDATE_ERROR = 'TOKEN_UPDATE_ERROR';
export const TOKEN_UPDATE_SUCCESS = 'TOKEN_UPDATE_SUCCESS';

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

export function register(data: { email: string; password: string; name: string}) {

   return function (dispatch: any) {
      dispatch({ type: REGISTER_REQUEST } as any);

      api("auth/register",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password, name: data.name })
         }

      )

         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: REGISTER_SUCCESS,
                  //orderId: res.order.number
               } as any)
            } else {
               dispatch({ type: REGISTER_ERROR } as any);
            }
         })

         .catch(err => {
            dispatch({ type: REGISTER_ERROR } as any);
         })

   }
}

/*
╒═╤══════╤═╕
│ │ Вход │ │
╘═╧══════╧═╛
*/

export function login(data: any) {

   return function (dispatch: any) {
      dispatch({ type: LOGIN_REQUEST })

      api("auth/login",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password })
         }
      )
         .then(res => {
            if (res && res.success) {
               document.cookie = `accessToken=${res.accessToken}`;
               document.cookie = `refreshToken=${res.refreshToken}`;
               document.cookie = `username=${res.user.name}`;
               document.cookie = `email=${res.user.email}`;
               dispatch({ type: LOGIN_SUCCESS } as any);
            } else {
               dispatch({ type: LOGIN_ERROR } as any);
            }
         })

         .catch(err => {
            dispatch({ type: LOGIN_ERROR } as any);
         })

   }
}

/*
╒═╤═══════════════════╤═╕
│ │ Обновление токена │ │
╘═╧═══════════════════╧═╛
*/
export function tokenUpdate() {
   return function (dispatch: any) {
      dispatch({ type: TOKEN_UPDATE_REQUEST });

      api("auth/token",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: cookieGet("refreshToken") })
         }
      )
         .then(res => {
            if (res && res.success) {
               document.cookie = `accessToken=${res.accessToken}`;
               dispatch({ type: TOKEN_UPDATE_SUCCESS } as any);
            } else {
               dispatch({ type: TOKEN_UPDATE_ERROR } as any);
            }
         })

         .catch(err => {
            dispatch({ type: TOKEN_UPDATE_ERROR } as any);
         })
   }
}

/*
╒═╤═══════╤═╕
│ │ Выход │ │
╘═╧═══════╧═╛
*/

export function logout() {

   return function (dispatch: any) {
      dispatch({ type: LOGOUT_REQUEST })
      console.log("userActions.js: logout()");

      api("auth/logout",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: cookieGet("refreshToken") })
         }
      )
         .then(res => {
            if (res && res.success) {
               cookieDelete("accessToken");
               cookieDelete("refreshToken");
               cookieDelete("username");
               cookieDelete("email");
               dispatch({ type: LOGOUT_SUCCESS } as any);
            } else {
               dispatch({ type: LOGOUT_ERROR } as any);
            }
         })

         .catch(err => {
            dispatch({ type: LOGOUT_ERROR } as any);
         })

   }
}

/*
╒═╤═════════════════════════╤═╕
│ │ Запрос на сброс пароля  │ │
╘═╧═════════════════════════╧═╛
*/
export function passwordForgot(data: any) {

   return function (dispatch: any) {
      dispatch({ type: PASSWORD_FORGOT_REQUEST })

      api("password-reset",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email })
         }
      )
         .then(res => {
            if (res && res.success) {
               dispatch({ type: PASSWORD_FORGOT_SUCCESS } as any);
            } else {
               dispatch({ type: PASSWORD_FORGOT_ERROR } as any);
            }
         })

         .catch(err => {
            dispatch({ type: PASSWORD_FORGOT_ERROR } as any);
         })

   }
}

/*
╒═╤══════════════╤═╕
│ │ Сброс пароля │ │
╘═╧══════════════╧═╛
*/
export function passwordReset(data: any) {

   return function (dispatch: any) {
      dispatch({ type: PASSWORD_RESET_REQUEST })

      api("password-reset",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: data.password, token: data.token })
         }
      )
         .then(res => {
            if (res && res.success) {
               alert("Пароль, судя по всему, изменён!");
               dispatch({
                  type: PASSWORD_RESET_SUCCESS,
                  //orderId: res.order.number
               } as any)
            } else {
               alert("Шёл трамвай девятый номер");
               dispatch({ type: PASSWORD_RESET_ERROR } as any);
            }
         })

         .catch(err => {
            alert("На площадке кто-то помер");
            dispatch({ type: PASSWORD_RESET_ERROR } as any);
         })

   }
}

/*
╒═╤═════════════════════╤═╕
│ │ Обновление профайла │ │
╘═╧═════════════════════╧═╛
*/
export function userProfileUpdate(data: any) {

   return function (dispatch: any) {
      dispatch({ type: PROFILE_UPDATE_REQUEST })

      api("auth/user",
         {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: data.name, email: data.email, password: data.password, token: data.accessToken })
         }
      )
         .then(res => {
            if (res && res.success) {
               alert("Профайл, наверное, изменён!");
               dispatch({
                  type: PASSWORD_RESET_SUCCESS
               } as any)
            } else {
               alert("Какая-то шляпа с реквизитами!");
               dispatch({ type: PASSWORD_RESET_ERROR } as any);
            }
         })

         .catch(err => {
            alert("Вообще ничего не вышло!");
            dispatch({ type: PASSWORD_RESET_ERROR } as any);
         })

   }
}

/*
╒═╤════════════════════════════════╤═╕
│ │ Загрузка данных о пользователе │ │
╘═╧════════════════════════════════╧═╛
*/
export function userLoad(token:any) {

   return function (dispatch:any) {
      dispatch({ type: USER_LOAD_REQUEST })

      api("auth/user",
         {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', authorization: token },
         })
         .then(res => {
            if (res && res.success) {
               console.log("Получилось!",res);
               dispatch({
                  type: USER_LOAD_SUCCESS,
                  name: res.user.name,
                  email: res.user.email
               } as any)
            } else {
               console.log("Не получается! Попробуйте переустановить Windows", res);
               dispatch({ type: USER_LOAD_ERROR } as any);
            }
         })

         .catch(err => {
            console.log("Облом!", err);
            if (err.message === "jwt expired") {
               console.log("Жетончик протух");
               // dispatch(tokenUpdate(userLoad()) as any);
               dispatch(tokenUpdate() as any);
            } else {
               dispatch({ type: USER_LOAD_ERROR } as any);
            }
         })
   }
}

// И тут Настя поняла, что хочет быть стриптизёршей...
