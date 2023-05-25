import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorItemsReducer } from './constructorItems';
import { itemCurrentReducer } from './itemCurrent';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
   ingredientsItems: ingredientsReducer,	      // список игредиентов
   constructorItems: constructorItemsReducer,   // содержимое конструктора
   itemCurrent: itemCurrentReducer,             // карточка ингредиента
   order: orderReducer                          // карточка заказа
});