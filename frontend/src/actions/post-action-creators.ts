import {ADD_POST, ADD_POST_COMMENT, GET_POSTS} from "./action-types";

// Not recommended for production environment to showing user credentials
export const serverIpAddress = "10.213.187.198"

export const getAllPosts = () => (dispatch) => {
    fetch(`http://${serverIpAddress}:3001/posts`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(res => {
            if(res.length) {
                dispatch({
                    type: GET_POSTS,
                    payload: res
                })
            }
        });
}
export const createNewPost = (newPost) => (dispatch, getState) => {
    fetch(`http://${serverIpAddress}:3001/users/${newPost.authorEmail}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(res => {
            if(res.length) {
                const authorNewPost = {
                    ...newPost,
                    authorId: res[0].id
                }
                fetch(`http://${serverIpAddress}:3001/addPost`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(authorNewPost)
                })
                    .then(response => {
                        return response.status;
                    })
                    .then(status => {
                        if(status === 200) {
                            dispatch({
                                type: ADD_POST,
                                payload: authorNewPost
                            })
                        }
                    });
            }
        });


}

export const createNewPostComment = (newPostComment) => (dispatch, getState) => {

  fetch(`http://${serverIpAddress}:3001/addPostComment`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newPostComment)
  })
    .then(response => {
      return response.status;
    })
    .then(status => {
      console.log('status', status)
      if(status === 200) {
        dispatch({
          type: ADD_POST_COMMENT,
          payload: newPostComment
        })
      }
    });
}
