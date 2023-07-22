
import { socketReducer, initialState } from './socketReducer.ts';
import * as t from '../actions/socketActions.ts';

describe('ingredients reducer', () => {
  
   it('WS_CONNECTION_START', () => {
      const action = { type: t.WS_CONNECTION_START }
      expect(socketReducer(initialState, action)).toEqual({
         wsConnected: false,
         total: 0,
         totalToday: 0,
         orders: []
      })
   })

   it('WS_CONNECTION_SUCCESS', () => {
      const action = { type: t.WS_CONNECTION_SUCCESS }
      expect(socketReducer(initialState, action)).toEqual({
         wsConnected: true,
         total: 0,
         totalToday: 0,
         orders: []
      })
   })

   it('WS_CONNECTION_ERROR', () => {
      const action = { type: t.WS_CONNECTION_ERROR }
      expect(socketReducer(initialState, action)).toEqual({
         wsConnected: false,
         total: 0,
         totalToday: 0,
         orders: []
      })
   })

   it('WS_CONNECTION_CLOSED', () => {
      const action = { type: t.WS_CONNECTION_CLOSED }
      expect(socketReducer(initialState, action)).toEqual({
         wsConnected: false,
         total: 0,
         totalToday: 0,
         orders: []
      })
   })

   it('WS_GET_FEED', () => {
      const action = { type: t.WS_GET_FEED }
      expect(socketReducer(initialState, action)).toEqual({
         wsConnected: false,
         total: undefined,
         totalToday: undefined,
         orders: undefined
      })
   })

})
