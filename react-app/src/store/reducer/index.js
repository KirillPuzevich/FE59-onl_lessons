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
} 
    from '../actions'


const initialState = {
    isBlackTheme: false,
    post: null,
    img: null,
    posts: {
        content: [],
        loading: false,
        loaded: false,
        error: null,
    },
    tab:"all",
    user: {
        content: {},
        loading: false,
        loaded: false,
        errors: {},
    },
    postDet:{
        content: [],
        loading: false,
        loaded: false,
    },
    token: null,
};

export const reducer = (state = initialState, action) => {
    console.log(state);
    if(action.type === CHANGE_THEME){
        return {
            ...state,
            isBlackTheme: !state.isBlackTheme,
        }
    }

    if(action.type === ADD_POST){

        console.log({
            ...state,
            post: action.payload,
        })
        return {
            ...state,
            post: action.payload,
        }
    }

    if(action.type === REMOVE_POST){

        console.log({
            ...state,
            post: null,
        })
        return {
            ...state,
            post: null,
        }
    }

    if(action.type === ADD_IMG){

        console.log({
            ...state,
            img: action.payload,
        })
        return {
            ...state,
            img: action.payload,
        }
    }

    if(action.type === REMOVE_IMG){

        console.log({
            ...state,
            img: null,
        })
        return {
            ...state,
            img: null,
        }
    }

    if(action.type === REQUEST_POSTS ){

        console.log({
            ...state,
            posts: {
                ...state.posts,
                loading: true,
            }
        })
        return {
            ...state,
            posts: {
                ...state.posts,
                loading: true,
            }
        }
    }    

    if(action.type === REQUEST_POST ){

        console.log({
            ...state,
            postDet: {
                ...state.postDet,
                loading: true
            }
        })
        return {
            ...state,
            postDet: {
                ...state.postDet,
                loading: true
            }
        };
    } 

    if(action.type === RECEIVED_POSTS ){

        console.log({
            ...state,
            posts: {
                ...state.posts,
                content: action.payload,
                loading: false,
                loaded: true,
            }
        })
        return {
            ...state,
            posts: {
                ...state.posts,
                content: action.payload,
                loading: false,
                loaded: true,
            }
        }
    }

    if(action.type === RECEIVED_POST ){

        console.log({
            ...state,
            postDet: {
                ...state.postDet,
                content: action.payload,
                loading: false,
                loaded: true,
            }
        })
        return {
            ...state,
            postDet: {
                ...state.postDet,
                content: action.payload,
                loading: false,
                loaded: true,
            }
        };
    }
    if(action.type === CHANGE_LIKE){
        return {
            ...state,
            posts: state.posts.content.map((post) => {
              return post.id === action.id
                ? { ...post, like: !post.like, dislike: false }
                : post;
            }),
          };
    }

    if(action.type === CHANGE_DISLIKE){
        return {
            ...state,
            posts: state.posts.content.map((post) => {
              return post.id === action.id
                ? { ...post, dislike: !post.dislike, like: false }
                : post;
            }),
          };
    }

    if(action.type === CHANGE_SAVE){
        return {
            ...state,
            posts: state.posts.content.map((post) => {
              return post.id === action.id
                ? { ...post, save: !post.save}
                : post;
            }),
          };
    }

    if(action.type === CHANGE_TAB){
        return{
            ...state,
            tab: action.tab,
        }

    }

    if(action.type === POST_USER_DATA ){

        return {
            ...state,
            user: {
                ...state.user,
                loading: true
            }
        }
    }

    if(action.type === RECEIVED_USER_DATA ){

        const isError = !action.user?.id;

        return {
            ...state,
            user: {
                ...state.user,
                content: isError ? {} : action.user,
                loading: false,
                loaded: true,
                errors: isError ? action.user : {},
                
            }
        }
    }

    if(action.type === RECEIVED_TOKEN ){

        return {
            ...state,
            token: action.payload,
          };
    }

    return state
};