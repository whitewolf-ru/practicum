import { ingredientsReducer, initialState } from './ingredients.ts';
import * as t from '../actions/ingredientsActions.ts';

describe('ingredients reducer', () => {
  
   it('INGREDIENTS_LOAD_REQUEST', () => {
     const action = { type: t.INGREDIENTS_LOAD_REQUEST }
     expect(ingredientsReducer(initialState, action)).toEqual({
        ...initialState,
        items: [],
        loadRequest: true,
        loadFailed: false
     })
   })
 
   it('INGREDIENTS_LOAD_ERROR', () => {
      const action = { type: t.INGREDIENTS_LOAD_ERROR }
      expect(ingredientsReducer(initialState, action)).toEqual({
         ...initialState,
         items: [],
         loadRequest: false,
         loadFailed: true
      })
   })
 
   it('INGREDIENTS_LOAD_SUCCESS', () => {
      const action = { type: t.INGREDIENTS_LOAD_SUCCESS }
      expect(ingredientsReducer(initialState, action)).toEqual({
         ...initialState,
         items: undefined,
         loadRequest: false,
         loadFailed: false
      })
   })
 
   it('INGREDIENTS_COUNTER_INCREMENT', () => {
      const action = { type: t.INGREDIENTS_COUNTER_INCREMENT }
      expect(ingredientsReducer(initialState, action)).toEqual({
         ...initialState,
         items: [],
         loadRequest: false,
         loadFailed: false
      })
   })
 
   it('INGREDIENTS_COUNTER_DECREMENT', () => {
      const action = { type: t.INGREDIENTS_COUNTER_DECREMENT }
      expect(ingredientsReducer(initialState, action)).toEqual({
         ...initialState,
         items: [],
         loadRequest: false,
         loadFailed: false
      })
   })

})
