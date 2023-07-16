
import { Dispatch } from 'redux';

import { api } from "../../utils/burger-api";
import { CONSTRUCTOR_CLEAR } from "./constructorActions";
import { IconstructorClearAction } from "./constructorActions";
import { cookieGet } from "../../utils/functions";

export const ORDER_UPDATE_REQUEST: "ORDER_UPDATE_REQUEST" = 'ORDER_UPDATE_REQUEST';
export const ORDER_UPDATE_SUCCESS: "ORDER_UPDATE_SUCCESS" = 'ORDER_UPDATE_SUCCESS';
export const ORDER_UPDATE_ERROR: "ORDER_UPDATE_ERROR" = 'ORDER_UPDATE_ERROR';

export interface IorderUpdateRequestAction {
   readonly type: typeof ORDER_UPDATE_REQUEST;
}

export interface IorderUpdateErrorAction {
   readonly type: typeof ORDER_UPDATE_SUCCESS;
}

export interface IorderUpdateSuccessAction {
   readonly type: typeof ORDER_UPDATE_ERROR;
}

export interface IConstructorClearAction {
   readonly type: typeof ORDER_UPDATE_ERROR;
}

export type TorderUpdateActions =
   | IorderUpdateRequestAction
   | IorderUpdateErrorAction
   | IorderUpdateSuccessAction
   | IconstructorClearAction;

type AppDispatch = Dispatch<TorderUpdateActions>;

export function orderUpload(data: string[]) {

   return function (dispatch: AppDispatch) {

      dispatch({ type: ORDER_UPDATE_REQUEST })

      api("orders",
         {
            method: "POST",
            headers: {
               "Content-Type": 'application/json',
               "Accept": "application/json",
               "Authorization": cookieGet("accessToken")
            },
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
