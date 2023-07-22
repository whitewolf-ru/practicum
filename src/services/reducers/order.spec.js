
import { orderReducer, initialState } from './order.ts';
import * as t from '../actions/order.ts';

describe('orders reducer', () => {
  
   it('ORDER_UPDATE_REQUEST', () => {
      const action = { type: t.ORDER_UPDATE_REQUEST }
      expect(orderReducer(initialState, action)).toEqual({
         orderId: "0"
      })
   })

   it('ORDER_UPDATE_SUCCESS', () => {
      const action = { type: t.ORDER_UPDATE_SUCCESS }
      expect(orderReducer(initialState, action)).toEqual({
         orderId: undefined
      })
   })

   it('ORDER_UPDATE_ERROR', () => {
      const action = { type: t.ORDER_UPDATE_ERROR }
      expect(orderReducer(initialState, action)).toEqual({
         orderId: "0"
      })
   })

})
