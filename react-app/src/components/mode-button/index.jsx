import { useState } from "react";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";
import "./styles.scss";

export const ModeButton = ({ isBlackTheme, handleChangeTheme }) => {
  return (
    <div className="mode-button" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};