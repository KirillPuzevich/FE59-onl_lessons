import { useContext, useEffect, useState } from "react";
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import { MyContext } from "../hooks/context.hook";
import save from '../img/save.svg'
import options from '../img/options.png'
import {useDispatch} from "react-redux";
import styles from "./index.css";
import { CHANGE_LIKE_ACTION } from "../../actions";
import { CHANGE_DISLIKE_ACTION } from "../../actions";
import { CHANGE_SAVE_ACTION } from "../../actions";
import { postsData } from "../posts/mock-data";
import { useParams, useNavigate} from "react-router-dom";
import { Spinner } from '../spinner';

export const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const ctx = useContext(MyContext);


  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
      .then((response) => response.json())

      .then((res) => {
        const currentPost = postsData.find((post) => post.id === +postId);

        if (currentPost) {
          setPost(currentPost);
        } else {
          navigate("/404");
        }
      })
  }, []);

  const handleClick = () => {
    navigate(-1); 
  };

  const dispatch = useDispatch();

  const handleClickDislike= () =>{
    dispatch(CHANGE_DISLIKE_ACTION(post.id));
  }
  const handleClickLike = () =>{
    dispatch(CHANGE_LIKE_ACTION(post.id));
  }

  const handleClickSave= () =>{
    dispatch(CHANGE_SAVE_ACTION(post.id));
  }

  if (!post) {
    return <Spinner />;
  }

    console.log(post);
    return (
      <div className={`details  ${ctx.isBlackTheme ? "details_dark" : ""}`}>
        <button className="details__btn" onClick={handleClick} >Go back</button>
        <h1 className="details__title">{post.title}</h1>
        <div className='details__content'>
            <img className="details__content-img" src={post.image} alt="" />
            <p className="details__content-text">{post.text}</p>
         <div className="details__actions">
            <div className="details__likes">
                <img 
                src={like}
                 alt="Like" 
                 className={`details__icon ${post.like ? "details__icon-active": ''}`} 
                 onClick={handleClickLike} />
                <img 
                src={dislike}
                alt="Dislike"
                className={`details__icon ${post.dislike ? "details__icon-active": ''}`} 
                onClick={handleClickDislike}/>
            </div>
            <div className="details__options">
                <img
                src={save}
                alt="Save"
                className={`details__icon ${post.save ? "details__icon-active" : ""}`} 
                onClick={handleClickSave} />
                <img src={options} alt="Options" className="details__icon" />
            </div>
         </div>
        </div>
      </div>
    );
  };