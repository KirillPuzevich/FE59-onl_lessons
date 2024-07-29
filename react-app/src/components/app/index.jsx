import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./styles.scss";
import { Header } from "../header";
import { Posts } from "../../pages/posts";
import { SignIn } from "../../pages/sign-in";
import { Success } from "../success";
import { Home } from "../../pages/home";
import { SignUp } from "../../pages/sign-up";
import { MyContext } from "../hooks/context.hook";
import { Registration } from "../registration";
import { NotFound } from "../../pages/not-found";
import { PostDetails } from "../../pages/post-details";
import { useSelector, useDispatch } from "react-redux";
import { ActivationEmailPage } from "../../pages/activation-email";
import { UserPage } from "../user-page";
import { fetchUserInfo } from "../../api/user";
import { ADD_USER_DATA_ACTION } from "../../store/actions";
import {CreatePost } from "../../pages/create-post";

export const App = () => {
  const dispatch = useDispatch();

  const isBlackTheme = useSelector((state) => state.isBlackTheme);

  useEffect(() => {
    // fetchUserInfo().then((response) => {
    //   localStorage.setItem("isAuth", !!response.id);
    //   if (response?.id) {
    //     dispatch(ADD_USER_DATA_ACTION(response));
    //   }
    // });
  }, []);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ isBlackTheme }}>
        <Header />
        <main className={isBlackTheme ? "black-theme" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/blog/:category"
              element={<Posts isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="/blog/:category/:postId"
              element={<PostDetails isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="signIn"
              element={<SignIn isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="success"
              element={<Success isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="signUp"
              element={<SignUp isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="userPage"
              element={<UserPage isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="create-post"
              element={<CreatePost isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="regist"
              element={<Registration isBlackTheme={isBlackTheme} />}
            />
            <Route
              path="/activate/:uid/:token"
              element={<ActivationEmailPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </MyContext.Provider>
    </BrowserRouter>
  );
};
