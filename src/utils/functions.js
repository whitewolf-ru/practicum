import { API } from "../services/settings.js";
import { api } from "./burger-api.js";

export function cookieGet(name) {
   const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
   );
   return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function cookieSet(name, value, props) {
   props = props || {};
   let exp = props.expires;
   if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
   }
   if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
   }
   value = encodeURIComponent(value);
   let updatedCookie = name + '=' + value;
   for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
         updatedCookie += '=' + propValue;
      }
   }
   document.cookie = updatedCookie;
}

export function deleteCookie(name) {
   cookieSet(name, null, { expires: -1 });
}

// Зачем я это написал?
export async function userGet() {
   api("auth/user", {
      headers: { authorization: cookieGet("accessToken") }
   })
      .then(res => {
         if (res && res.success) {
            console.log("res.user", res.user);
            return res.user;
         } else {
            console.log("Какая-то шляпа с реквизитами!", res);
         }
      })

      //.catch(err => {
      //   console.log("Вообще ничего не вышло!", err);
      //})

};
