import { constructorItemsReducer, initialState } from './constructorItems.ts';
import * as t from '../actions/constructorActions.ts';

describe('constructor reducer', () => {
  
   it('ITEM_ADD', () => {
      const action = {
         type: t.ITEM_ADD,
      }
   
      expect(constructorItemsReducer(initialState, action)).toEqual({
         ...initialState,
          bun: undefined,
         items: [undefined]
      })
   })

   it('ITEM_DELETE', () => {
      const action = { type: t.ITEM_DELETE }
      expect(constructorItemsReducer(initialState, action)).toEqual({
          bun: undefined,
          items: []
      })
   })

   it('ITEMS_SWAP', () => {
      const action = { type: t.ITEMS_SWAP }
      expect(constructorItemsReducer(initialState, action)).toEqual({
          items: []
      })
   })

   it('BUN_DELETE', () => {
      const action = { type: t.BUN_DELETE }
      expect(constructorItemsReducer(initialState, action)).toEqual({
          bun: undefined,
          items: []
      })
   })

   it('BUN_ADD', () => {
      const action = { type: t.BUN_ADD }
      expect(constructorItemsReducer(initialState, action)).toEqual({
          items: []
      })
   })

   it('CONSTRUCTOR_CLEAR', () => {
      const action = { type: t.CONSTRUCTOR_CLEAR }
      expect(constructorItemsReducer(initialState, action)).toEqual({
          items: []
      })
   })

})
