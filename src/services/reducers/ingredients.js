import {
   INGREDIENTS_LOAD, INGREDIENTS_LOAD_ERROR, INGREDIENTS_LOAD_SUCCESS, INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT
} from '../actions/ingredientsActions.js';

const initialState = {
   loadRequest: false, loadFailed: false, ingredients: []
}

const ingredientsReducer = (state = initialState, action) => {
   switch (action.type) {

      case INGREDIENTS_LOAD: {
         return {
            ...state,
            loadRequest: true,
            loadFailed: false
         };
      }

      case INGREDIENTS_LOAD_SUCCESS: {
         return {
            ...state,
            ingredients: action.ingredients,
            loadRequest: false
         }
      }

      case INGREDIENTS_LOAD_ERROR: {
         return {
            ...state,
            loadFailed: true,
            loadRequest: false
         };
      }

      case INGREDIENTS_COUNTER_INCREMENT: {

         return {
            ...state,
            ingredients: {
               ...state.ingredients,
               list: state.ingredients.list.map(
                  (item, i) => item._id === action.item._id ?
                     action.item.counter ?
                        { ...item, counter: item.counter + 1 }
                        :
                        { ...item, counter: 1 }
                     : item
               )

            }

         };
      }

      case INGREDIENTS_COUNTER_DECREMENT: {
         return {
            ...state,
            ingredients: {
               ...state.ingredients,
               list: state.ingredients.list.map(
                  (item, i) => item._id === action.itemId ? { ...item, counter: item.counter - 1 } : item
               )
            }
         };
      }

      default: { return state }

   }
}

export { ingredientsReducer };
