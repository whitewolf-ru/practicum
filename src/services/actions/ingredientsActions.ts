
import { api } from "../../utils/burger-api";

import { Tingredient } from '../../utils/types'

export const INGREDIENTS_LOAD_REQUEST: "INGREDIENTS_LOAD_REQUEST" = 'INGREDIENTS_LOAD_REQUEST';
export const INGREDIENTS_LOAD_ERROR: "INGREDIENTS_LOAD_ERROR" = 'INGREDIENTS_LOAD_ERROR';
export const INGREDIENTS_LOAD_SUCCESS: "INGREDIENTS_LOAD_SUCCESS" = 'INGREDIENTS_LOAD_SUCCESS';

export const INGREDIENTS_COUNTER_INCREMENT: "INGREDIENTS_COUNTER_INCREMENT" = 'INGREDIENTS_COUNTER_INCREMENT';
export const INGREDIENTS_COUNTER_DECREMENT: "INGREDIENTS_COUNTER_DECREMENT" = 'INGREDIENTS_COUNTER_DECREMENT';

export interface IingredientLoadRequestAction {
   readonly type: typeof INGREDIENTS_LOAD_REQUEST;
}

export interface IingredientLoadErrorAction {
   readonly type: typeof INGREDIENTS_LOAD_ERROR;
}

export interface IingredientLoadSuccessAction {
   readonly type: typeof INGREDIENTS_LOAD_SUCCESS;
   items: Tingredient[]
}

export interface IingredientCounterIncrementAction {
   readonly type: typeof INGREDIENTS_COUNTER_INCREMENT;
   readonly item: Tingredient;
}

export interface IingredientCounterDecrementAction {
   readonly type: typeof INGREDIENTS_COUNTER_DECREMENT;
   itemId: string;
}

export type TingredientsActions =
   | IingredientLoadRequestAction
   | IingredientLoadErrorAction
   | IingredientLoadSuccessAction
   | IingredientCounterIncrementAction
   | IingredientCounterDecrementAction;

export type TingredientsLoad = {
   type: string;
   loadRequest?: boolean;
   items?: Tingredient[];
}

export function ingredientsLoad() {

   return function (dispatch: (arg0: TingredientsLoad) => void) {
      dispatch({
         type: INGREDIENTS_LOAD_REQUEST,
         loadRequest: true
      })

      api("ingredients")
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: INGREDIENTS_LOAD_SUCCESS,
                  loadRequest: false,
                  items: res.data
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