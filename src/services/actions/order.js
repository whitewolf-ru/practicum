import { API } from "../settings.js";
import { checkResponse } from "../../utils/burger-api.js";

export const ORDER_UPDATE_REQUEST = 'ORDER_UPDATE_REQUEST';
export const ORDER_UPDATE_SUCCESS = 'ORDER_UPDATE_SUCCESS';
export const ORDER_UPDATE_ERROR = 'ORDER_UPDATE_ERROR';

export function orderUpload(data) {

   return function (dispatch) {

      dispatch({ type: ORDER_UPDATE_REQUEST })

      fetch(`${API}/orders`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "ingredients": data })
         }
      )

         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: ORDER_UPDATE_SUCCESS,
                  orderId: res.order.number
               })
            } else {
               dispatch({ type: ORDER_UPDATE_ERROR });
            }
         })

         .catch(err => {
            dispatch({ type: ORDER_UPDATE_ERROR });
         })
   }

}
