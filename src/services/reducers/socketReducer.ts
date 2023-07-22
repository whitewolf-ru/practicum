
import {
   WS_CONNECTION_START,
   WS_CONNECTION_SUCCESS,
   WS_CONNECTION_ERROR,
   WS_CONNECTION_CLOSED,
   WS_GET_FEED,
   TwsActions
} from '../../services/actions/socketActions';
// import { getCurrentTimestamp } from '../../utils/functions';

export type TsocketItem = {
   _id: string;
   name: string;
   number: number;
   ingredients: string[];
   status: string;
   createdAt: string;
   updatedAt: string;
}

export type TwsState = {
   wsConnected: boolean;
   total: number;
   totalToday: number;
   orders: TsocketItem[];
   error?: Event;
}

const initialState: TwsState = { wsConnected: false, orders: [], total: 0, totalToday: 0 };

export const socketReducer = (state = initialState, action: TwsActions): TwsState => {
   //console.log("socketReducer", action);

   switch (action.type) {

      case WS_CONNECTION_START: {
         return {
            ...state,
            wsConnected: false,
            orders: [...state.orders]
         }
      }

      case WS_CONNECTION_SUCCESS: {
         return {
            ...state,
            wsConnected: true,
            orders: [...state.orders]
         }
      }

      case WS_CONNECTION_ERROR: {
         return {
            ...state,
            wsConnected: false
         }
      }

      case WS_CONNECTION_CLOSED: {
         return {
            ...state,
            wsConnected: false
         }
      }

      case WS_GET_FEED: {
         console.log("action.data",action.data);
         return {
            ...state,
            total: action.data.total,
            totalToday: action.data.totalToday,
            orders: action.data.orders
         }
      }

      default: { return state }

   }

}
