
import { API } from "../services/settings";

export const checkResponse = (response: Response) => {
  if (response.ok) return response.json();
  return Promise.reject(`Ошибка ${response.status}`);
};

const checkSuccess = (response: { success?: boolean; }) => {
  if (response && response.success) {
    return response;
  }
  return Promise.reject(`Ответ не success: ${response}`);
};

export function api(method: string, options?: any) {
   return fetch(API + method, options).then(checkResponse);
}

// to be updated
// const getIngredients =  () => request("ingredients")
export const api_request = (method: string, options: RequestInit | undefined) => {
  return fetch(API + method, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const login = async (data: { email: string; password: string; }) => {
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
