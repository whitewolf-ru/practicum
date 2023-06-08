
import { PASSWORD_FORGOT_SUCCESS, PASSWORD_RESET_SUCCESS, LOGIN_SUCCESS } from '../actions/userActions.js';

const initialState = { password_reset_step: 1, isLoggedIn: false };

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      
      case PASSWORD_FORGOT_SUCCESS: {
         return {
            ...state,
            password_reset_step: 2
         }
      }

      case PASSWORD_RESET_SUCCESS: {
         return {
            ...state,
            password_reset_step: 3
         }
      }

      case LOGIN_SUCCESS: {
         return {
            ...state,
            isLoggedIn: true
         }
      }

      default: { return state }

   }
}

export { userReducer };
