
import { ITEM_ADD, ITEM_DELETE, ITEMS_SWAP } from '../actions/constructorActions.js';

const initialState = { items: [] }

const constructorItemsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ITEM_ADD: {
         return {
            items: [...state.items, action.item]
         }
      }

      case ITEM_DELETE: {
         return {
            items: state.items.filter((item) => item.uniqueId !== action.uniqueId)
         };
      }

      case ITEMS_SWAP: {
         [state.items[action.itemTarget], state.items[action.itemSource]]  = [state.items[action.itemSource], state.items[action.itemTarget]];
         return {
            items: state.items
         };
      }

      default: { return state }

   }

}

export { constructorItemsReducer };
