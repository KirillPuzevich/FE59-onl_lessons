import {
  ADD_POST,
  REMOVE_POST,
  CHANGE_THEME,
  ADD_IMG,
  REMOVE_IMG,
  RECEIVED_POSTS,
  CHANGE_LIKE,
  CHANGE_DISLIKE,
  CHANGE_TAB,
  CHANGE_SAVE,
  REQUEST_POSTS,
  POST_USER_DATA,
  RECEIVED_USER_DATA,
  REQUEST_POST,
  RECEIVED_POST,
  RECEIVED_TOKEN,
  SET_SEARCH_VALUE,
  SORTED_ORDER,
  SET_PAGE,
  SET_POST_COUNT,
  LOADING_IMG,
  SET_CREATE_ERRORS,
} from "../actions";

const initialState = {
  isBlackTheme: false,
  post: null,
  img: null,
  searchValue: "",
  order: "date",
  posts: {
    content: [],
    count: 0,
    loading: false,
    loaded: false,
    error: null,
  },
  tab: "all",
  user: {
    content: {},
    loading: false,
    loaded: false,
    errors: {},
  },
  postDet: {
    content: [],
    loading: false,
    loaded: false,
  },
  page: 1,
  token: null,
  image: [],
  createPostErrors: {
    errors: {},
  },
};

export const reducer = (state = initialState, action) => {
  console.log(state);
  if (action.type === CHANGE_THEME) {
    return {
      ...state,
      isBlackTheme: !state.isBlackTheme,
    };
  }

  if (action.type === ADD_POST) {
    return {
      ...state,
      post: action.payload,
    };
  }

  if (action.type === REMOVE_POST) {
    return {
      ...state,
      post: null,
    };
  }

  if (action.type === ADD_IMG) {
    return {
      ...state,
      img: action.payload,
    };
  }

  if (action.type === REMOVE_IMG) {
    return {
      ...state,
      img: null,
    };
  }

  if (action.type === REQUEST_POSTS) {
    return {
      ...state,
      posts: {
        ...state.posts,
        loading: true,
      },
    };
  }

  if (action.type === REQUEST_POST) {
    return {
      ...state,
      postDet: {
        ...state.postDet,
        loading: true,
      },
    };
  }

  if (action.type === RECEIVED_POSTS) {
    return {
      ...state,
      posts: {
        ...state.posts,
        content: action.payload.results,
        count: action.payload.count,
        loading: false,
        loaded: true,
      },
    };
  }

  if (action.type === RECEIVED_POST) {
    return {
      ...state,
      postDet: {
        ...state.postDet,
        content: action.payload,
        loading: false,
        loaded: true,
      },
    };
  }
  if (action.type === CHANGE_LIKE) {
    return {
      ...state,
      posts: state.posts.content.map((post) => {
        return post.id === action.id
          ? { ...post, like: !post.like, dislike: false }
          : post;
      }),
    };
  }

  if (action.type === CHANGE_DISLIKE) {
    return {
      ...state,
      posts: state.posts.content.map((post) => {
        return post.id === action.id
          ? { ...post, dislike: !post.dislike, like: false }
          : post;
      }),
    };
  }

  if (action.type === CHANGE_SAVE) {
    return {
      ...state,
      posts: state.posts.content.map((post) => {
        return post.id === action.id ? { ...post, save: !post.save } : post;
      }),
    };
  }

  if (action.type === CHANGE_TAB) {
    return {
      ...state,
      tab: action.tab,
    };
  }

  if (action.type === POST_USER_DATA) {
    return {
      ...state,
      user: {
        ...state.user,
        loading: true,
      },
    };
  }

  if (action.type === RECEIVED_USER_DATA) {
    const isError = !action.user?.id;

    return {
      ...state,
      user: {
        ...state.user,
        content: isError ? {} : action.user,
        loading: false,
        loaded: true,
        errors: isError ? action.user : {},
      },
    };
  }

  if (action.type === RECEIVED_TOKEN) {
    return {
      ...state,
      token: action.payload,
    };
  }
  if (action.type === SET_SEARCH_VALUE) {
    return { ...state, searchValue: action.payload };
  }

  if (action.type === SORTED_ORDER) {
    return { ...state, order: action.payload };
  }

  if (action.type === SET_PAGE) {
    return { ...state, page: action.payload };
  }

  if (action.type === LOADING_IMG) {
    return { ...state, image: action.payload };
  }

  if (action.type === SET_CREATE_ERRORS) {
    return {
      ...state,
      createPostErrors: {
        errors: action.payload,
      },
    };
  }

  return state;
};
