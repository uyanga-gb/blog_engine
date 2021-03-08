import { combineReducers } from 'redux';
import modalReducer from "./modal-reducer"

export default combineReducers({
  modals: modalReducer
});
