
import { ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_ERROR } from '../actions/order.js';

const initialState = { id: 0 };

const orderReducer = (state = initialState, action) => {
   switch (action.type) {

      case ORDER_UPDATE_REQUEST: { 
         return 0;
      }

      case ORDER_UPDATE_SUCCESS: {
         return { orderId: action.orderId };
      }

      case ORDER_UPDATE_ERROR: {
         return { ...state, orderId: 0 };
      }

      default:
         return state
   }
}

export { orderReducer };
