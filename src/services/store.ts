import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers";
import { socketInterface } from '../interfaces/sockets';
import { ws_link } from '../services/settings';

import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_FEED,
  WS_SEND_MESSAGE
} from "../services/actions/socketActions";

import { TwsStoreActions } from "../services/actions/socketActions";

const wsActions: TwsStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_FEED
};

const composeEnhancers =
   typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk,socketInterface(ws_link, wsActions))));

//export const store = createStore(
//  rootReducer,
//  composeWithDevTools(applyMiddleware(thunkMiddleware, socketMiddleware(wsUrl, wsActions)))
//);

export default store;
