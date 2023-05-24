
import { API } from "../settings.js";
import { checkResponse } from "../../utils/burger-api.js";

export const INGREDIENTS_LOAD = 'INGREDIENTS_LOAD';
export const INGREDIENTS_LOAD_ERROR = 'INGREDIENTS_LOAD_ERROR';
export const INGREDIENTS_LOAD_SUCCESS = 'INGREDIENTS_LOAD_SUCCESS';
export const INGREDIENTS_COUNTER_INCREMENT = 'INGREDIENTS_COUNTER_INCREMENT';
export const INGREDIENTS_COUNTER_DECREMENT = 'INGREDIENTS_COUNTER_DECREMENT';

export function ingredientsLoad() {

   return function (dispatch) {
      dispatch({
         type: INGREDIENTS_LOAD,
         loadRequest: true
      })

      fetch(`${API}/ingredients`)
         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: INGREDIENTS_LOAD_SUCCESS,
                  ingredients: {
                     list: res.data
                  }
               })
            } else {
               // Если произошла ошибка, отправляем соотествующий action
               dispatch({
                  type: INGREDIENTS_LOAD_ERROR
               })
            }
         })

         .catch(err => {
            // Если сервер не вернул данных, также отправляем action об ошибке
            dispatch({
               type: INGREDIENTS_LOAD_ERROR
            })
         })
   }
}