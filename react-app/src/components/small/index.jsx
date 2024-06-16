import React from 'react';
import small from '../img/large.jpg'
import styles from './index.css'
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import save from '../img/save.png'


export const Small = ({ post }) => {
  return (
    <div class="small">
    <div class="small__content">
    <div class="small__info">
    <p class="small__date">{post.date}</p>
      <h2 class="small__title">{post.title}</h2>
    </div>
    <img className='small__img' src={small} alt="" />
  </div>
  <div className='small__img-container'>
    <div className='small__img-container_first'>
    <img src={like} alt="" />
    <img src={dislike} alt="" />
    </div>
  <img src={save} alt="" />
  </div>
  <p class="small__author">{post.author}</p>
</div>
  );
};