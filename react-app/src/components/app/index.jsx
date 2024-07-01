import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './styles.scss'
import { Header } from '../header';
import { Posts } from '../posts';
import { SignIn } from '../sign-in';
import { Success } from '../success';
import { Home } from '../home';
import { SignUp } from '../sign-up';
import { MyContext } from "../hooks/context.hook";
import { Registration } from '../registration';
import { NotFound } from '../not-found';
import { PostDetails } from '../post-details';


export const App = () => {

  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsBlackTheme((prevStat) => !prevStat);
  };

  return (
    <BrowserRouter>
    <MyContext.Provider value={{ isBlackTheme }}>
      <Header  
      isBlackTheme={isBlackTheme}
      handleChangeTheme={handleChangeTheme}
      />
      <main className={isBlackTheme ? "black-theme" : ""}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="blog" element={<Posts  isBlackTheme={isBlackTheme}/>}/>
          <Route path="/blog/:postId" element={<PostDetails  isBlackTheme={isBlackTheme}/>}/>
          <Route path="signIn" element={<SignIn isBlackTheme={isBlackTheme}/>}/>
          <Route path="success" element={<Success isBlackTheme={isBlackTheme}/>}/>
          <Route path="signUp" element={<SignUp isBlackTheme={isBlackTheme}/>}/>
          <Route path="regist" element={<Registration  isBlackTheme={isBlackTheme}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      </MyContext.Provider>
      </BrowserRouter>
  );
}

