import { itemCurrentReducer, initialState } from './itemCurrent.ts';
import * as t from '../actions/itemCurrent.ts';
import { TconstructorElement } from '../../utils/types';

describe('ingredients reducer', () => {
  
   it('ITEM_UPDATE', () => {
      const action = { type: t.ITEM_UPDATE }
      expect(itemCurrentReducer(initialState, action)).toEqual(
         undefined
      )
   })

   it('ITEM_DELETE', () => {
      const action = { type: t.ITEM_UPDATE }
      expect(itemCurrentReducer(initialState, action)).toEqual(
         undefined
      )
   })

})
