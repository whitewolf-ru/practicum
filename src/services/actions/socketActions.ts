import { TfeedMessageIncoming } from "../../utils/types";

// Всякие типы для сокетов

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_FEED: 'WS_GET_FEED' = 'WS_GET_FEED';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export interface IwsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly method: string;
}

export interface IwsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IwsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IwsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IwsGetFeedAction {
  readonly type: typeof WS_GET_FEED;
  readonly data: TfeedMessageIncoming;
}

export interface IwsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: {message: string};
}

export type TwsActions =
  | IwsConnectionStart
  | IwsConnectionSuccessAction
  | IwsConnectionErrorAction
  | IwsConnectionClosedAction
  | IwsGetFeedAction
  | IwsSendMessageAction;

export type TwsStoreActions = {
  wsInit: typeof WS_CONNECTION_START,
  wsSendMessage: typeof WS_SEND_MESSAGE,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_FEED,
};

export interface IMessageResponse {
  message: string;
  success: boolean;
  username: string;
  id?: string;
  isBot?: boolean;
}
