import { API } from "../services/settings.js";

export const checkResponse = (response) => {
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
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
