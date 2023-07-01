import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorItemsReducer } from './constructorItems';
import { itemCurrentReducer } from './itemCurrent';
import { orderReducer } from './order';
import { userReducer } from './user';

export const rootReducer = combineReducers({
   ingredientsItems: ingredientsReducer,	      // список игредиентов
   constructorItems: constructorItemsReducer,   // содержимое конструктора
   itemCurrent: itemCurrentReducer,             // карточка ингредиента
   order: orderReducer,                         // карточка заказа
   user: userReducer                            // всякая шляпа с пользователем
});