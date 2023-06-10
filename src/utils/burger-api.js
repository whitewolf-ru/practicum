
import { API } from "../services/settings.js";

export const checkResponse = (response) => {
  if (response.ok) return response.json();
  return Promise.reject(`Ошибка ${response.status}`);
};

const checkSuccess = (response) => {
  if (response && response.success) {
    return response;
  }
  return Promise.reject(`Ответ не success: ${response}`);
};

export function api(method, options) {
   return fetch(API + method, options).then(checkResponse);
}

// to be updated
// const getIngredients =  () => request("ingredients")
// Это, конечно, здорово, но непонятно, как делать dispatch и прочую магию при возврате ошибки
export const api_request = (method, options) => {
  return fetch(API + method, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const login = async data => {
   return await fetch(`${API}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ email: data.email, password: data.password })
   });
};
