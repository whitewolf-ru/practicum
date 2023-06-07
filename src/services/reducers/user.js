
import { PASSWORD_FORGOT_REQUEST, PASSWORD_FORGOT_ERROR, PASSWORD_FORGOT_SUCCESS, LOGIN_SUCCESS } from '../actions/userActions.js';

const initialState = { password_reset_step: 1, login: 0 };

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case PASSWORD_FORGOT_SUCCESS: {
         return {
            ...state,
            password_reset_step: 2
         }
      }
      case LOGIN_SUCCESS: {
         return {
            ...state,
            login: 1
         }
      }
      default: { return state }
   }
}

export { userReducer };
