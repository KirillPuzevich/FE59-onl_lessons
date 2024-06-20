import { useEffect, useState } from "react";
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import save from '../img/save.png'
import options from '../img/options.png'
import styles from "./index.css";

export const Post = ({ post, index, size }) => {
  return (
    <div className={`post post_${size}`} style={{ gridArea: `post-${index}` }}>
      <div className={`post__wrapper post__wrapper_${size}`} >
        <div className={`post__info post__info_${size}`}>
          <p className="post__date">{post.date}</p>
          <h3 className="post__title">{post.title}</h3>
          <p className="post__text">{post.text}</p>
        </div>
        <div className={`post__img post__img_${size}`}>
          <img src={post.image} alt="" />
        </div>
      </div>
      <div className="post__actions">
        <div className="post__likes">
          <img src={like} alt="Like" className="post__icon" />
          <img src={dislike} alt="Dislike" className="post__icon" />
        </div>
        <div className="post__options">
          <img src={save} alt="Save" className="post__icon" />
          <img src={options} alt="Options" className="post__icon" />
        </div>
      </div>
    </div>
  );
};