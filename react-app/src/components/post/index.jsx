import { useEffect, useState, useContext } from "react";
import like from '../img/like.svg'
import { Link } from "react-router-dom";
import { MyContext } from "../hooks/context.hook";
import {useDispatch} from "react-redux";
import { ADD_POST_ACTION } from "../../actions";
import { ADD_IMG_ACTION } from "../../actions";
import { CHANGE_LIKE_ACTION } from "../../actions";
import { CHANGE_DISLIKE_ACTION } from "../../actions";
import { CHANGE_SAVE_ACTION } from "../../actions";
import dislike from '../img/dislike.svg'
import save from '../img/save.svg'
import options from '../img/options.png'
import styles from "./index.css";

export const Post = ({ post, index, size, img}) => {

  const ctx = useContext(MyContext);
  
  const dispatch = useDispatch();

  const handleClickOptions = () =>{
    dispatch(ADD_POST_ACTION(post));
  }

  const handleClickImg = () =>{
    dispatch(ADD_IMG_ACTION(img));
  }

  const handleClickLike = () =>{
    dispatch(CHANGE_LIKE_ACTION(post.id));
  }

  const handleClickDislike= () =>{
    dispatch(CHANGE_DISLIKE_ACTION(post.id));
  }

  const handleClickSave= () =>{
    dispatch(CHANGE_SAVE_ACTION(post.id));
  }
  

  return (
    <div className={`post post_${size} ${ctx.isBlackTheme ? "post_dark" : ""}`} style={{ gridArea: `post-${index}` }}>
      <div className={`post__wrapper post__wrapper_${size}`} >
        <div className={`post__info post__info_${size}`}>
          <p className="post__date">{post.date}</p>
          <Link to={`${post.id}`} className="post__title">
            {post.title}
          </Link>
          <p className="post__text">{post.text}</p>
        </div>
        <div className={`post__img post__img_${size}`}>
          <img src={post.image} alt="" onClick={handleClickImg}/>
        </div>
      </div>
      <div className="post__actions">
        <div className="post__likes">
          <img 
          src={like} 
          alt="Like" 
          className={`post__icon ${post.like ? "post__icon-active": ''}`} 
          onClick={handleClickLike}
          />
          <img 
          src={dislike}
          alt="Dislike" 
          className={`post__icon ${post.dislike ? "post__icon-active": ''}`}
          onClick={handleClickDislike}
          />
        </div>
        <div className="post__options">
          <img 
          src={save}
          alt="Save"
          className={`post__icon ${post.save ? "post__icon-active" : ''}`} 
          onClick={handleClickSave}
          />
          <img src={options} alt="Options" className="post__icon" onClick={handleClickOptions}/>
        </div>
      </div>
    </div>
  );
};