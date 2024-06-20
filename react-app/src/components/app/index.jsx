import React, { useState } from 'react';
import styles from './index.css'
import { Header } from '../header';
import { Posts } from '../posts';
import { Sign } from '../sign';
import { Success } from '../success';
import { Home } from '../home';


export const App = () => {

  const [page, setPage] = useState("home");

  return (
    <>
    <Header  setPage={setPage}/>
    {page === "home" && <Home />}
    {page === "blog" && <Posts />}
    {page === "signUp" && <Sign setPage={setPage}/>}
    {page === "success" && <Success setPage={setPage}/>}
    </>
  );
}

