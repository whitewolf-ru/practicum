
import { PASSWORD_FORGOT_SUCCESS, PASSWORD_RESET_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOAD_SUCCESS } from '../actions/userActions';

type Tuser = {
   password_reset_step: number;
   isLoggedIn: boolean;
}

const initialState: Tuser = { password_reset_step: 1, isLoggedIn: false };

const userReducer = (state = initialState,
   action: { type: string; name: string; email: string; }): Tuser | {
      name: string; email: string; password_reset_step: number; isLoggedIn: boolean;
   } => {
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

      case LOGOUT_SUCCESS: {
         return {
            ...state,
            isLoggedIn: false
         }
      }

      case USER_LOAD_SUCCESS: {
         return {
            ...state,
            name: action.name,
            email: action.email
         }
      }


      default: { return state }

   }
}

export { userReducer };
