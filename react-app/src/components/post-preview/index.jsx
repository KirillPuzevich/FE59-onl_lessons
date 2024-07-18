import "./styles.scss";
import dislike from '../img/dislike.svg'
import {useDispatch} from "react-redux";
import save from '../img/save.svg'
import options from '../img/options.png'
import like from '../img/like.svg'
import { 
  REMOVE_POST_ACTION,
  CHANGE_LIKE_ACTION,
  CHANGE_SAVE_ACTION,
  CHANGE_DISLIKE_ACTION,
 } from "../../store/actions";

export const PostPreview = ({post}) => {

  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(REMOVE_POST_ACTION)
  };

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
    <div className="modal">
      <div className="modal__wrapper">
        <h4 className="modal__title">Post</h4>
        <div className="modal__info ">
          <p className="modal__date">{post.date}</p>
          <a href="#" className="modal__title-post">
            {post.title}
          </a>
          <p className="modal__text">{post.text}</p>
        </div>
        <div className="modal__img ">
          <img src={post.image} alt="" />
        </div>
        <div className="modal__actions">
            <div className="modal__likes">
            <img src={like} 
            alt="Like" 
            className={`modal__icon ${post.like ? "modal__icon-active": ''}`} 
            onClick={handleClickLike} />
            <img 
            src={dislike}
            alt="Dislike"
            className={`modal__icon ${post.dislike ? "modal__icon-active": ''}`} 
            onClick={handleClickDislike}/>
            </div>
            <div className="modal__options">
            <img 
            src={save}
            alt="Save"
            className={`modal__icon ${post.save ? "modal__icon-active": ''}`} 
            onClick={handleClickSave} 
            />
            <img src={options} alt="Options" className="modal__icon" />
            </div>
        </div>
        <div className="modal__actions">
          <button className="modal__cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};