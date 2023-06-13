
import { API } from "../settings.js";
import { api, checkResponse } from "../../utils/burger-api.js";

export const INGREDIENTS_LOAD_REQUEST = 'INGREDIENTS_LOAD_REQUEST';
export const INGREDIENTS_LOAD_ERROR = 'INGREDIENTS_LOAD_ERROR';
export const INGREDIENTS_LOAD_SUCCESS = 'INGREDIENTS_LOAD_SUCCESS';

export const INGREDIENTS_COUNTER_INCREMENT = 'INGREDIENTS_COUNTER_INCREMENT';
export const INGREDIENTS_COUNTER_DECREMENT = 'INGREDIENTS_COUNTER_DECREMENT';

export function ingredientsLoad() {

   return function (dispatch) {
      dispatch({
         type: INGREDIENTS_LOAD_REQUEST,
         loadRequest: true
      })

      api("ingredients")
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: INGREDIENTS_LOAD_SUCCESS,
                  ingredients: { list: res.data }
               })
            } else {
               dispatch({ type: INGREDIENTS_LOAD_ERROR });
            }
         })

         .catch(err => {
            dispatch({ type: INGREDIENTS_LOAD_ERROR });
         })
   }
}