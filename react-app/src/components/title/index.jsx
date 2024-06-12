import React from 'react';
import styles from './index.css'

export const Title = ({ isLarge }) => {
  return (
    <h1 style={{ fontSize: isLarge ? '30px' : '16px' }}>
      Sign up
    </h1>
  );
};