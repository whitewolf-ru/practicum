
import { customAlphabet } from 'nanoid';

import { TconstructorElement } from '../../utils/types'
import { ITEM_ADD, ITEM_DELETE, ITEMS_SWAP, BUN_DELETE, BUN_ADD, CONSTRUCTOR_CLEAR } from '../actions/constructorActions';
import type { TconstructorActions } from '../actions/constructorActions';

type Titems = {
   bun?: TconstructorElement;
   items: TconstructorElement[];
}

const initialState: Titems = { items: [] };

const nanoid = customAlphabet('1234567890', 32);

const constructorItemsReducer = (state = initialState, action: TconstructorActions) => {

   switch (action.type) {

      case ITEM_ADD: {
         action.item.uuid = nanoid();

         return {
            ...state, bun: state.bun,
            items: [...state.items, action.item]
         }
      }

      case BUN_ADD: {
         action.item.uuid = nanoid();
         return {
            ...state, bun: action.item,
            items: [...state.items]
         }
      }

      case BUN_DELETE: {
         return {
            ...state, bun: null,
            items: [...state.items]
         }
      }

      case ITEM_DELETE: {
         console.log("ITEM_DELETE, uniqueId=%s",action.uniqueId);
         return {
            ...state, bun: state.bun,
            items: state.items.filter((item) => item.uniqueId !== action.uniqueId)
         }
      }

      case ITEMS_SWAP: {
         [state.items[action.itemTarget], state.items[action.itemSource]] = [state.items[action.itemSource], state.items[action.itemTarget]];
         return {
            ...state, bun: state.bun,
            items: [...state.items]
         }
      }

      case CONSTRUCTOR_CLEAR: {
         return initialState
      }

      default: { return state }

   }

}

export { constructorItemsReducer };
