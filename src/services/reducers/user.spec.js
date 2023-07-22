
import { userReducer, initialState } from './user.ts';
import * as t from '../actions/userActions.ts';

describe('user reducer', () => {
  
   it('LOGIN_SUCCESS', () => {
      const action = { type: t.LOGIN_SUCCESS }
      expect(userReducer(initialState, action)).toEqual({
         isLoggedIn: true,
         password_reset_step: 1
      })
   })

   it('PASSWORD_FORGOT_SUCCESS', () => {
      const action = { type: t.PASSWORD_FORGOT_SUCCESS }
      expect(userReducer(initialState, action)).toEqual({
         isLoggedIn: false,
         password_reset_step: 2
      })
   })

   it('PASSWORD_RESET_SUCCESS', () => {
      const action = { type: t.PASSWORD_RESET_SUCCESS }
      expect(userReducer(initialState, action)).toEqual({
         isLoggedIn: false,
         password_reset_step: 3
      })
   })

   it('LOGOUT_SUCCESS', () => {
      const action = { type: t.LOGOUT_SUCCESS }
      expect(userReducer(initialState, action)).toEqual({
         isLoggedIn: false,
         password_reset_step: 1
      })
   })

   it('USER_LOAD_SUCCESS', () => {
      const action = { type: t.USER_LOAD_SUCCESS }
      expect(userReducer(initialState, action)).toEqual({
         isLoggedIn: false,
         email: undefined,
         name: undefined,
         password_reset_step: 1
      })
   })

})
