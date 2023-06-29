
import { ITEM_UPDATE, ITEM_DELETE } from '../actions/itemCurrent';

const initialState = {};

const itemCurrentReducer = (state = initialState, action: { type: string; item: any; }) => {
   switch (action.type) {
      case ITEM_UPDATE:
         return action.item
      case ITEM_DELETE:
         return {}
      default:
         return state
   }
}

export { itemCurrentReducer };
