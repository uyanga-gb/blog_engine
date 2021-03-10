import {
    ADD_POST,
    ADD_POST_COMMENT, GET_POSTS
} from "../actions/action-types";
import createReducer from "../utils/redux/create-reducer";


export const initialState = {
    posts: []
}

const postReducers = {
    [ADD_POST](state, {payload}) {
        console.log(payload)
        return {
            ...state,
            posts: [payload]
        }
    },
    [GET_POSTS](state, {payload}) {
        console.log('GET_POSTS  reducer', payload)
        return {
            ...state,
            posts: payload
        }
    }
}

export default createReducer(postReducers, initialState)
