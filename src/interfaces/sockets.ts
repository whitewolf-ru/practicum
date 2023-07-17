// Не используется в версии с redux
import type { Middleware, MiddlewareAPI } from 'redux';

import { AppDispatch, RootState } from "../utils/types";
import { TwsActions, TwsStoreActions } from "../services/actions/socketActions";
//import { getCurrentTimestamp } from "../utils/functions";
import { cookieGet } from "../utils/functions";

export const socketInterface = (wsUrl: string, wsActions: TwsStoreActions): Middleware => {
   return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;
      //console.log("socketInterface");

      return next => (action: TwsActions) => {
         //console.log("%cСобытие socketInterface", "color: #00f");
         const { dispatch, getState } = store;
         const { type } = action;
         const { wsInit, wsClose, wsSendMessage, onClose, onMessage } = wsActions;
         const token = cookieGet("accessToken");

         // Доступно только авторизованным пользователям
         if (type === wsInit) {
            const { method } = action;
            const paramToken = method === "orders" && token ? "?token=" + token.split('Bearer ')[1] : "";

            console.log(`wsUrl: создаётся сокет ${wsUrl}${method}${paramToken}`);
            socket = new WebSocket(`${wsUrl}${method}${paramToken}`);
         }

         if (socket) {
            //console.log("Сокет существует");

            if (type === wsClose) socket.close(1000, "Так вышло")

            socket.onopen = event => {
               console.log("onopen(): calling dispatch(onOpen)");
               //dispatch({ type: onOpen });
            };

            socket.onerror = event => {
               console.log("onerror(): calling dispatch(onError)");
               // dispatch({ type: onError, payload: event });
            };

            socket.onmessage = event => {
               // console.log("onmessage()", event);
               const { data } = event;
               // console.log("data", data);
               const parsedData = JSON.parse(data);
               console.log("parsedData", parsedData);

               if (event.data === 'ping') {
                  // console.log("ping");
                  if (socket) socket.send('pong');
               }

               // const { success, ...restParsedData } = parsedData;
               dispatch({ type: onMessage, data: { ...parsedData } });
            };

            socket.onclose = event => {
               console.log("onclose()");
               dispatch({ type: onClose, payload: event });
            };

            if (type === wsSendMessage) {
               //const payload = action.payload;
               //const message = { ...(payload as Tmessage), token: token};
               //socket.send(JSON.stringify(message));
            }

         }

         next(action);

      };
   }) as Middleware;
};