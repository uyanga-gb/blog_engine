import {
  USER_LOGIN
} from "../actions/action-types";
import createReducer from "../utils/redux/create-reducer";


export const initialState = {
 username: "",
  password: ""
}

const userReducers = {
  [USER_LOGIN](state, {signedInUser}) {
    return {
      ...state,
      user: signedInUser
    }
  }
}

export default createReducer(userReducers, initialState)
