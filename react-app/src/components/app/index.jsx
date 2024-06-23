import React, { useState } from 'react';
import styles from './index.css'
import { Header } from '../header';
import { Posts } from '../posts';
import { SignIn } from '../sign-in';
import { Success } from '../success';
import { Home } from '../home';
import { SignUp } from '../sign-up';
import { Registration } from '../registration';


export const App = () => {

  const [page, setPage] = useState("home");

  return (
    <>
    <Header  setPage={setPage}/>
    {page === "home" && <Home />}
    {page === "blog" && <Posts />}
    {page === "signIn" && <SignIn setPage={setPage}/>}
    {page === "success" && <Success setPage={setPage}/>}
    {page === "signUp" && <SignUp setPage={setPage}/>}
    {page === "regist" && <Registration setPage={setPage}/>}
    </>
  );
}

