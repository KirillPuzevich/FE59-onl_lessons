import React, { useState, createContext } from 'react';
import styles from './styles.scss'
import { Header } from '../header';
import { Posts } from '../posts';
import { SignIn } from '../sign-in';
import { Success } from '../success';
import { Home } from '../home';
import { SignUp } from '../sign-up';
import { MyContext } from "../hooks/context.hook";
import { Registration } from '../registration';


export const App = () => {

  const [page, setPage] = useState("home");
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsBlackTheme((prevStat) => !prevStat);
  };

  return (
    <MyContext.Provider value={{ isBlackTheme }}>
      <Header  
      setPage={setPage}
      isBlackTheme={isBlackTheme}
      handleChangeTheme={handleChangeTheme}
      />
      <main className={isBlackTheme ? "black-theme" : ""}>
      {page === "home" && <Home />}
      {page === "blog" && <Posts  isBlackTheme={isBlackTheme}/>}
      {page === "signIn" && 
      <SignIn setPage={setPage} isBlackTheme={isBlackTheme}/>}
      {page === "success" && 
      <Success setPage={setPage} isBlackTheme={isBlackTheme}/>}
      {page === "signUp" && 
      <SignUp setPage={setPage} isBlackTheme={isBlackTheme}/>}
      {page === "regist" && 
      <Registration setPage={setPage} isBlackTheme={isBlackTheme}/>}
      </main>
      </MyContext.Provider>
  );
}

