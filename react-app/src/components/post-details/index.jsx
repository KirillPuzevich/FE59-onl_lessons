import { useContext } from "react";
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import { MyContext } from "../hooks/context.hook";
import save from '../img/save.png'
import options from '../img/options.png'
import styles from "./index.css";

export const PostDetails = ({ post, setCurrentPost }) => {
  const ctx = useContext(MyContext);
    console.log(post);
    return (
      <div className={`details  ${ctx.isBlackTheme ? "details_dark" : ""}`}>
        <button className="details__btn" onClick={() => setCurrentPost(null)}>Go back</button>
        <h1 className="details__title">{post.title}</h1>
        <div className='details__content'>
            <img className="details__content-img" src={post.image} alt="" />
            <p className="details__content-text">{post.text}</p>
         <div className="details__actions">
            <div className="details__likes">
                <img src={like} alt="Like" className="details__icon" />
                <img src={dislike} alt="Dislike" className="details__icon" />
            </div>
            <div className="details__options">
                <img src={save} alt="Save" className="details__icon" />
                <img src={options} alt="Options" className="details__icon" />
            </div>
         </div>
        </div>
      </div>
    );
  };