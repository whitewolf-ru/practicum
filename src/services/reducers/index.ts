import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorItemsReducer } from './constructorItems';
import { itemCurrentReducer } from './itemCurrent';
import { orderReducer } from './order';
import { userReducer } from './user';
import { socketReducer } from './socketReducer';
//import { socketInterface } from '../../interfaces/sockets';

export const rootReducer = combineReducers({
   ingredientsItems: ingredientsReducer,	      // список игредиентов
   constructorItems: constructorItemsReducer,   // содержимое конструктора
   itemCurrent: itemCurrentReducer,             // карточка ингредиента
   order: orderReducer,                         // карточка заказа
   user: userReducer,                           // всякая шляпа с пользователем
   socket: socketReducer                       // вебсокет
});