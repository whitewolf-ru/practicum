
import { ITEM_ADD, ITEM_DELETE, ITEMS_SWAP, BUN_DELETE, BUN_ADD, CONSTRUCTOR_CLEAR } from '../actions/constructorActions.js';

const initialState = { bun: null, items: [] };

const constructorItemsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ITEM_ADD: {
         return {
            ...state,
            bun: state.bun,
            items: [...state.items, action.item]
         }
      }

      case BUN_ADD: {
         return {
            ...state,
            bun: action.item,
            items: [...state.items]
         }
      }

      case BUN_DELETE: {
         return {
            ...state,
            bun: null,
            items: [...state.items]
         }
      }

      case ITEM_DELETE: {
         return {
            ...state,
            bun: state.bun,
            items: state.items.filter((item) => item.uniqueId !== action.uniqueId)
         }
      }

      case ITEMS_SWAP: {
         [state.items[action.itemTarget], state.items[action.itemSource]] = [state.items[action.itemSource], state.items[action.itemTarget]];
         return {
            ...state,
            bun: state.bun,
            items: [...state.items]
         }
      }

      case CONSTRUCTOR_CLEAR: {
         return {
            initialState
         }
      }

      default: { return state }

   }

}

export { constructorItemsReducer };
