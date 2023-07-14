
import {
   WS_CONNECTION_START,
   WS_CONNECTION_SUCCESS,
   WS_CONNECTION_ERROR,
   WS_CONNECTION_CLOSED,
   WS_GET_FEED,
   TwsActions
} from '../../services/actions/socketActions';
import { getCurrentTimestamp } from '../../utils/functions';

type TwsState = {
   wsConnected: boolean;
   items: string[];
   error?: Event;
}

const initialState: TwsState = { wsConnected: false, items: [] };

export const socketReducer = (state = initialState, action: TwsActions) => {
   console.log("socketReducer",action);

   switch (action.type) {

      case WS_CONNECTION_START: {
         console.log("WS_CONNECTION_START",action.method);
         return {
            ...state,
            wsConnected: false,
            items: [...state.items]
         }
      }

      case WS_CONNECTION_SUCCESS: {
         console.log("WS_CONNECTION_SUCCESS");
         return {
            ...state,
            wsConnected: true
         }
      }

      case WS_CONNECTION_ERROR: {
         console.log("WS_CONNECTION_ERROR");
         return {
            ...state,
            wsConnected: false
         }
      }

      case WS_CONNECTION_CLOSED: {
         console.log("WS_CONNECTION_CLOSED");
         return {
            ...state,
            wsConnected: false
         }
      }

      case WS_GET_FEED: {
         console.log("WS_GET_FEED",action.data);
         return {
            ...state,
            total: action.data.total,
            totalToday: action.data.totalToday,
            items: action.data.orders
         }
      }

      default: { return state }

   }

}
