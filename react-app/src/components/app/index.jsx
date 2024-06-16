import React, { useState } from 'react';
import { Title } from "../title"
import styles from './index.css'
import { Menu } from '../menu';
import { Alert } from '../alert';
import { Big } from '../big';
import { Medium } from '../medium';
import { Small } from '../small';


export const App = () => {

    const largePost = {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2021-10-06",
      lesson_num: 1,
      title: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      author: "Author"
    };
  
    const mediumPost = {
      id: 2,
      date: "2021-10-07",
      lesson_num: 2,
      title: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Author"
    };
  
    const smallPost = {
      id: 3,
      date: "2021-10-08",
      lesson_num: 3,
      title: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Author"
    };
  
  return (
    <>
    <Title isLarge={true}/>
    <Menu isOpen={true}/>
    <Alert status="warning"/>
    <div className='post'>
    <Big post={largePost}/>
    <Medium post={mediumPost}/>
    <Small post={smallPost}/>
    </div>
    </>
  );
}

