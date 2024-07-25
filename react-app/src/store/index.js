import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));
// const store = configureStore({ reducer });

export default store;
