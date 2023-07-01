import {
   INGREDIENTS_LOAD_REQUEST, INGREDIENTS_LOAD_ERROR, INGREDIENTS_LOAD_SUCCESS, INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT
} from '../actions/ingredientsActions';

import { Tingredient } from '../../utils/types'

type Tingredients = {
   loadRequest: boolean;
   loadFailed: boolean;
   items: Tingredient[]
}

const initialState: Tingredients = {
   loadRequest: false,
   loadFailed: false,
   items: []
}

const ingredientsReducer = (
   state = initialState,
   action: {
      type: any;
      items: any;
      item: {
         _id: string;
         counter?: number;
      };
      itemId: any;
   }
) => {
   switch (action.type) {

      case INGREDIENTS_LOAD_REQUEST: {
         return {
            ...state,
            loadRequest: true,
            loadFailed: false
         };
      }

      case INGREDIENTS_LOAD_SUCCESS: {
         return {
            ...state,
            items: action.items,
            loadRequest: false
         }
      }

      case INGREDIENTS_LOAD_ERROR: {
         return {
            ...state,
            items: [],
            loadFailed: true,
            loadRequest: false
         };
      }

      case INGREDIENTS_COUNTER_INCREMENT: {
         console.log("INGREDIENTS_COUNTER_INCREMENT");
         return {
            ...state,
            //items: {
            //   ...state.items,
               items: state.items.map(
                  (item: { _id: string; counter: number; }, i: number) =>
                     item._id === action.item._id ?
                        action.item.counter ?
                           { ...item, counter: item.counter + 1 }
                           :
                           { ...item, counter: 1 }
                        : item
               )
            //}
         };
      }

      case INGREDIENTS_COUNTER_DECREMENT: {
         //console.log("INGREDIENTS_COUNTER_DECREMENT");
         return {
            ...state,
            //items: {
            //   ...state.items,
               items: state.items.map(
                  (item: { _id: string; counter: number; }, i: number) =>
                     item._id === action.itemId ?
                        { ...item, counter: item.counter - 1 } : item
               )
            //}
         };
      }

      default: { return state }

   }
}

export { ingredientsReducer };
