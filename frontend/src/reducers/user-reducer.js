import {
  USER_LOGIN
} from "../actions/action-types";
import createReducer from "../utils/redux/create-reducer";


export const initialState = {
 username: ""
}

const userReducers = {
  [USER_LOGIN](state, {payload}) {
    console.log(payload)
    return {
      ...state,
      username: payload.username
    }
  }
}

export default createReducer(userReducers, initialState)
