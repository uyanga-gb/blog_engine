import {
    USER_LOGIN,
  GET_POSTS,
  GET_POST
} from "./action-types";


export const createNewUser = (newUser) => (dispatch, getState) => {

   fetch('http://localhost:3001/newUser', {
       method: 'POST',
       headers: {
           'content-type': 'application/json',
           'Accept': 'application/json'
       },
       body: JSON.stringify(newUser)
   })
    .then(response => {
      return response.text();
    })
    .then(user => {
      dispatch({
          type: USER_LOGIN,
          payload: user
      })
    });
  }

export const loginUser = ({       username,
                                  password
                              }) => (dispatch, getState) => {

    fetch('http://localhost:3001')
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log('I am getting data from my local server', data)
        });
}
