import {
    USER_LOGIN,
  GET_POSTS,
  GET_POST
} from "./action-types";


export const createNewUser = (newUser) => (dispatch, getState) => {

   fetch('http://localhost:3001/register', {
       method: 'POST',
       headers: {
           'content-type': 'application/json',
           'Accept': 'application/json'
       },
       body: JSON.stringify(newUser)
   })
    .then(response => {
        console.log('new user data from db ', response)
      return response.status;
    })
    .then(status => {
        console.log('status', status)
        if(status === 200) {
            dispatch({
                type: USER_LOGIN,
                payload: newUser
            })
        }
    });
  }

export const loginUser = (user) => (dispatch, getState) => {
    fetch('http://localhost:3001/userlogin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log('login response', response)
            return response.status;
        })
        .then(status => {
            console.log('login response data ', status)
            if(status === 404) {
                return "Not found"
            } else if(status === 200) {
                dispatch({
                    type: USER_LOGIN,
                    payload: user
                })
            }
        });
}
