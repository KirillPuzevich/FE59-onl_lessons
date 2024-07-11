import { postsData } from "../components/posts/mock-data";

export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_IMG = "ADD_IMG";
export const REMOVE_IMG = "REMOVE_IMG";
export const RECEIVED_POSTS = "RECEIVED_POSTS";
export const CHANGE_LIKE = "CHANGE_LIKE";
export const CHANGE_DISLIKE = "CHANGE_DISLIKE";
export const CHANGE_TAB = "CHANGE_TAB";
export const CHANGE_SAVE = "CHANGE_SAVE";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const POST_USER_DATA = "POST_USER_DATA";
export const RECEIVED_USER_DATA = "RECEIVED_USER_DATA";



export const CHANGE_THEME_ACTION = { type: CHANGE_THEME};
export const REMOVE_POST_ACTION = { type: REMOVE_POST};
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG};
export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS};
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA};



export const ADD_POST_ACTION = (post) => ({ type: ADD_POST, payload: post});
export const ADD_IMG_ACTION = (img) => ({ type: ADD_IMG, payload: img});
export const ADD_POSTS_ACTION = (posts) => ({ type: RECEIVED_POSTS, payload: posts});

export const CHANGE_LIKE_ACTION = (id) => ({type: CHANGE_LIKE, id});
export const CHANGE_DISLIKE_ACTION = (id) => ({type: CHANGE_DISLIKE, id});
export const CHANGE_SAVE_ACTION = (id) => ({type: CHANGE_SAVE, id});
export const CHANGE_TAB_ACTION = (tab) => ({type: CHANGE_TAB, tab});
export const ADD_USER_DATA_ACTION = (user) => ({type: RECEIVED_USER_DATA, user});


export const ADD_MIDDLEWARE_ACTION = () => {
    return (dispatch) => {
    dispatch(REQUEST_POSTS_ACTION);

    const URL = "https://jsonplaceholder.typicode.com/todos/";

    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(ADD_POSTS_ACTION(postsData));
      })
      .catch((e) => console.log(e));
    }
}

export const SIGN_UP_MIDDLEWARE_ACTION = ({name, email, pass, group}) => {
  return (dispatch) => {
  dispatch(POST_USER_DATA_ACTION);

  const URL = "https://studapi.teachmeskills.by/auth/users/";

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      username: name,
      email,
      password: pass,
      course_group: group,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => dispatch(ADD_USER_DATA_ACTION(json)));
};
}
