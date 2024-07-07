export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_IMG = "ADD_IMG";
export const REMOVE_IMG = "REMOVE_IMG";
export const ADD_POSTS = "ADD_POSTS";
export const CHANGE_LIKE = "CHANGE_LIKE";
export const CHANGE_DISLIKE = "CHANGE_DISLIKE";
export const CHANGE_TAB = "CHANGE_TAB";
export const CHANGE_SAVE = "CHANGE_SAVE";



export const CHANGE_THEME_ACTION = { type: CHANGE_THEME};
export const REMOVE_POST_ACTION = { type: REMOVE_POST};
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG};


export const ADD_POST_ACTION = (post) => ({ type: ADD_POST, payload: post});
export const ADD_IMG_ACTION = (img) => ({ type: ADD_IMG, payload: img});
export const ADD_POSTS_ACTION = (posts) => ({ type: ADD_POSTS, payload: posts});

export const CHANGE_LIKE_ACTION = (id) => ({type: CHANGE_LIKE, id});
export const CHANGE_DISLIKE_ACTION = (id) => ({type: CHANGE_DISLIKE, id});
export const CHANGE_SAVE_ACTION = (id) => ({type: CHANGE_SAVE, id});

export const CHANGE_TAB_ACTION = (tab) => ({type: CHANGE_TAB, tab});
