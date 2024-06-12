import React from 'react';
import { Title } from "../title"
import styles from './index.css'
import { Menu } from '../menu';
import { Alert } from '../alert';

export const App = () => {
  return (
    <>
    <Title isLarge={true}/>
    <Menu isOpen={true}/>
    <Alert status="done"/>
    </>
  );
}

