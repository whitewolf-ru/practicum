
import { ORDER_UPDATE } from '../actions/order.js';

const initialState = {};

const orderReducer = (state = initialState, action) => {
   switch (action.type) {
            
   case ORDER_UPDATE: {
         return {
            orderId: action.orderId
         };
      }

      default:
         return state
   }
} 

export { orderReducer };
