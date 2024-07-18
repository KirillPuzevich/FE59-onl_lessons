import "./styles.scss";
import {useDispatch} from "react-redux";
import { REMOVE_IMG_ACTION } from "../../store/actions";

export const ImgPreview = ({post}) => {

  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(REMOVE_IMG_ACTION)
  };

  return (
    <div className="modal__photo">
      <div className="modal__photo-wrapper">
        <button className="modal__photo-button" onClick={handleCancel}>x</button>
        <div className="modal__photo-img ">
          <img src={post.image} alt="" />
        </div>
      </div>
    </div>
  );
};