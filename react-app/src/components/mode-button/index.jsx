import moon from "../img/moon.svg";
import sun from "../img/sun.svg";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_THEME_ACTION} from "../../actions"
import "./styles.scss";

export const ModeButton = () => {
  const dispatch = useDispatch();
  const isBlackTheme = useSelector(state => state.isBlackTheme);

  const handleChangeTheme = () =>{
    dispatch(CHANGE_THEME_ACTION)
  }
  return (
    <div className="mode-button" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};