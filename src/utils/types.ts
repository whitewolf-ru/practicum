//AppDispatch, AppThunk, RootState

// types/index.ts
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

import store from '../services/store';
import { TingredientsActions } from '../services/actions/ingredientsActions';
import { TconstructorActions } from '../services/actions/constructorActions';
import { TitemsActions } from '../services/actions/itemCurrent';
import { TuserActions } from '../services/actions/userActions';
import { TorderUpdateActions } from '../services/actions/order';
import { TwsActions } from '../services/actions/socketActions';

export type Tingredient = {
   _id: string,
   name: string,
   type: string,
   price: number,
   image: string,
   image_mobile: string,
   image_large: string,
   proteins: number,
   fat: number,
   carbohydrates: number,
   calories: number,
   __v: number,
   counter: number
}

export type TfeedOrder = {
   ingredients: string[],
   _id: string,
   status: string,
   number: number,
   createdAt: string,
   updatedAt: string
}

// Входящее сообщение для списка заказов

export type TfeedMessageIncoming = {
   success: boolean,
   orders: TfeedOrder[],
   total: 1,
   totalToday: 1
}

// Всякая байда для redux

export type TconstructorElement = Tingredient & { uniqueId: number, uuid: string, itemIndex: number }
export type RootState = ReturnType<typeof store.getState>;

export type AppActions = TwsActions | TuserActions;

//export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;

// Типизация всех экшенов приложения
type TApplicationActions = TingredientsActions | TconstructorActions | TitemsActions | TuserActions | TorderUpdateActions | TwsActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
   ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;

