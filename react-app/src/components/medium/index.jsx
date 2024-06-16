import React from 'react';
import medium from '../img/medium.jpg'
import styles from './index.css'
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import save from '../img/save.png'

export const Medium = ({ post }) => {
  return (
    <div className='medium'>
      <img className='medium__img' src={medium} alt=''/>
      <p className='medium__date'>{post.date}</p>
      <h2 className='medium__title'>{post.title}</h2>
      <div className='medium__img-container'>
      <div className='medium__img-container_first'>
      <img src={like} alt="" />
      <img src={dislike} alt="" />
      </div>
      <img src={save} alt="" />
      </div>
      <p className='medium__author'>{post.author}</p>
    </div>
  );
};