
import { ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_ERROR } from '../actions/order';

type Torder = { orderId: string };

const initialState: Torder = { orderId: "0" };

const orderReducer = (
   state = initialState,
   action: { type: string; orderId: string; }): Torder => {
   switch (action.type) {

      case ORDER_UPDATE_REQUEST: {
         return { orderId: "0" }
      }

      case ORDER_UPDATE_SUCCESS: {
         return { orderId: action.orderId };
      }

      case ORDER_UPDATE_ERROR: {
         return { ...state, orderId: "0" };
      }

      default:
         return state
   }
}

export { orderReducer };
