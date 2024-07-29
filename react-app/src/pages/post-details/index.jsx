import { useContext, useEffect, useState } from "react";
import like from "../../components/img/like.svg";
import dislike from "../../components/img/dislike.svg";
import { MyContext } from "../../components/hooks/context.hook";
import save from "../../components/img/save.svg";
import options from "../../components/img/options.png";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.scss";
import { postsData } from "../posts/mock-data";
import { useParams, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/spinner";
import {
  POST_MIDDLEWARE_ACTION,
  CHANGE_LIKE_ACTION,
  CHANGE_DISLIKE_ACTION,
  CHANGE_SAVE_ACTION,
} from "../../store/actions";

export const PostDetails = () => {
  const { postId } = useParams();

  const navigate = useNavigate();
  const ctx = useContext(MyContext);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postDet.content);

  useEffect(() => {
    dispatch(POST_MIDDLEWARE_ACTION(postId, navigate));
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  const handleClickDislike = () => {
    dispatch(CHANGE_DISLIKE_ACTION(post.id));
  };
  const handleClickLike = () => {
    dispatch(CHANGE_LIKE_ACTION(post.id));
  };

  const handleClickSave = () => {
    dispatch(CHANGE_SAVE_ACTION(post.id));
  };

  if (!post) {
    return <Spinner />;
  }
  console.log(post);

  return (
    <div className={`details  ${ctx.isBlackTheme ? "details_dark" : ""}`}>
      <button className="details__btn" onClick={handleClick}>
        Go back
      </button>
      <h1 className="details__title">{post.title}</h1>
      <div className="details__content">
        <img className="details__content-img" src={post.image} alt="" />
        <p className="details__content-text">{post.text}</p>
        <div className="details__actions">
          <div className="details__likes">
            <img
              src={like}
              alt="Like"
              className={`details__icon ${
                post.like ? "details__icon-active" : ""
              }`}
              onClick={handleClickLike}
            />
            <img
              src={dislike}
              alt="Dislike"
              className={`details__icon ${
                post.dislike ? "details__icon-active" : ""
              }`}
              onClick={handleClickDislike}
            />
          </div>
          <div className="details__options">
            <img
              src={save}
              alt="Save"
              className={`details__icon ${
                post.save ? "details__icon-active" : ""
              }`}
              onClick={handleClickSave}
            />
            <img src={options} alt="Options" className="details__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
