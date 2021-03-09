import {ADD_POST} from "./action-types";

export const createNewPost = (newPost) => (dispatch, getState) => {

  fetch('http://localhost:3001/newPost', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
    .then(response => {
      return response.status;
    })
    .then(status => {
      console.log('status', status)
      if(status === 200) {
        dispatch({
          type: ADD_POST,
          payload: newPost
        })
      }
    });
}
