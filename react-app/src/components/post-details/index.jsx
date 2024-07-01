import { useContext, useEffect, useState } from "react";
import like from '../img/like.svg'
import dislike from '../img/dislike.svg'
import { MyContext } from "../hooks/context.hook";
import save from '../img/save.png'
import options from '../img/options.png'
import styles from "./index.css";
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