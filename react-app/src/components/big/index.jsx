import React from 'react';
import big from '../img/big.jpg'
import styles from './index.css'
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import save from '../img/save.png'

export const Big = ({ post }) => {
  return (
    <div class="big">
    <div class="big__content">
    <div class="big__info">
    <p class="big__date">{post.date}</p>
      <h2 class="big__title">{post.title}</h2>
      <p class="big__text">{post.text}</p>
    </div>
    <img class="big__img" src={big} alt="" />
  </div>
  <div className='big__img-container'>
    <div className='big__img-container_first'>
    <img src={like} alt="" />
    <img src={dislike} alt="" />
    </div>
  <img src={save} alt="" />
  </div>
  <p class="big__author">{post.author}</p>
</div>
  );
};