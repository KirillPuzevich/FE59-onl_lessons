import { fetchUserActivation, fetchToken } from "../../api/auth";
import { fetchUserInfo } from "../../api/user";
import { postsData } from "../../pages/posts/mock-data";

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
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVED_POST = "RECEIVED_POST";
export const RECEIVED_TOKEN = "RECEIVED_TOKEN";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SORTED_ORDER = "SORTED_ORDER";
export const SET_PAGE = 'SET_PAGE';
export const SET_POST_COUNT = 'SET_POST_COUNT'
export const LOADING_IMG = 'LOADING_IMG'
export const SET_CREATE_ERRORS = 'SET_CREATE_ERRORS';



export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_POST_ACTION = { type: REMOVE_POST };
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG };
export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS };
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };
export const REQUEST_POST_ACTION = { type: REQUEST_POST };

export const ADD_POST_ACTION = (post) => ({ type: ADD_POST, payload: post });
export const ADD_IMG_ACTION = (img) => ({ type: ADD_IMG, payload: img });
export const ADD_POSTS_ACTION = (posts) => ({
  type: RECEIVED_POSTS,
  payload: posts,
});
export const loadingImage = (image) => ({
  type: LOADING_IMG,
  payload: image,
});
export const setPostCount = (count) => ({
  type: SET_POST_COUNT,
  payload: count,
});
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
export const setCreateErrors = (createPostErrors) => ({
  type: SET_CREATE_ERRORS,
  payload: createPostErrors,
});
export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const setSortedOrder = (order) => ({
  type: SORTED_ORDER,
  payload: order,
});
export const ADD_POST_DETAILS_ACTION = (postDet) => ({
  type: RECEIVED_POST,
  payload: postDet,
});
export const addTokenAction = (payload) => ({ type: RECEIVED_TOKEN, payload });

export const CHANGE_LIKE_ACTION = (id) => ({ type: CHANGE_LIKE, id });
export const CHANGE_DISLIKE_ACTION = (id) => ({ type: CHANGE_DISLIKE, id });
export const CHANGE_SAVE_ACTION = (id) => ({ type: CHANGE_SAVE, id });
export const CHANGE_TAB_ACTION = (tab) => ({ type: CHANGE_TAB, tab });
export const ADD_USER_DATA_ACTION = (user) => ({
  type: RECEIVED_USER_DATA,
  user,
});

export const POST_MIDDLEWARE_ACTION = (postId, navigate) => {
  return (dispatch) => {
    dispatch(REQUEST_POST_ACTION);

    const URL = `https://studapi.teachmeskills.by/blog/posts/${postId}/`;

    fetch(URL)
      .then((response) => response.json())

      .then((res) => {
        const currentPost = postsData.find((post) => post.id === +postId);

        if (currentPost) {
          dispatch(ADD_POST_DETAILS_ACTION(currentPost));
        } else {
          navigate("/404");
        }
      })
      .catch((error) => console.error(error));
  };
};

export const ADD_MIDDLEWARE_ACTION = (searchValue, orderValue, limit, page, isLoadMore) => {
  return (dispatch, getState) => {
    dispatch(REQUEST_POSTS_ACTION);
    const offset = (page - 1) * limit;
    const URL = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}${
      searchValue ? `&search=${searchValue}` : ""
    }${
      orderValue ? `&ordering=${orderValue}` : ""
    }`;

    fetch(URL)
      .then((response) => response.json())
      .then(({ results, count}) => {
        const state = getState()

        const newPost = isLoadMore
        ? [...state.posts.content, ...results]
        : results
        dispatch(ADD_POSTS_ACTION({ results: newPost, count }));
      })
      .catch((e) => console.log(e));
  };
};

export const SIGN_UP_MIDDLEWARE_ACTION = (
  { name, email, password, group },
  navigate
) => {
  return (dispatch) => {
    dispatch(POST_USER_DATA_ACTION);

    const URL = "https://studapi.teachmeskills.by/auth/users/";

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        username: name,
        email,
        password,
        course_group: group,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(ADD_USER_DATA_ACTION(json));

        if (json.id) {
          navigate("/regist", { state: { email } });
        }
      });
  };
};

export const activationEmailMiddlewareAction = (uid, token) => {
  return (dispatch) => {
    fetchUserActivation(uid, token);
  };
};

export const authorizationMiddlewareAction = (values, navigate) => {
  return (dispatch) => {
    fetchToken(values).then((response) => {
      fetchUserInfo(navigate).then((response) =>
        dispatch(ADD_USER_DATA_ACTION(response))
      );
    });
  };
};

export const getUserInfoMiddlewareAction = (navigate) => {
  return (dispatch) => {
    fetchUserInfo(navigate).then((response) =>
      dispatch(ADD_USER_DATA_ACTION(response))
    );
  };
};
