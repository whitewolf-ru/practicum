import { api } from "../../utils/burger-api";
import { CONSTRUCTOR_CLEAR } from "./constructorActions";

export const ORDER_UPDATE_REQUEST = 'ORDER_UPDATE_REQUEST';
export const ORDER_UPDATE_SUCCESS = 'ORDER_UPDATE_SUCCESS';
export const ORDER_UPDATE_ERROR = 'ORDER_UPDATE_ERROR';

export function orderUpload( data : string[] ) {

   return function (dispatch:any) {

      dispatch({ type: ORDER_UPDATE_REQUEST })
      console.log("dispatch", data);

      api("orders",
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "ingredients": data })
         }
      )

         .then(res => {
            if (res && res.success) {

               dispatch({
                  type: ORDER_UPDATE_SUCCESS,
                  orderId: res.order.number
               })

               dispatch({
                  type: CONSTRUCTOR_CLEAR,
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
