import styles from "./styles.css";
import { useRef } from "react";
import { ModeButton } from "../mode-button";
import logo from '../img/logo.svg';

export const Header = ({
  setPage,
  isBlackTheme,
  handleChangeTheme,
}) => {

  const header = useRef(null);

  return (
    <header className={`header ${isBlackTheme ? "header_black" : ""}`}
    ref={header}>
      <div className="container">
        <div className="header__wrapper">
        <div className="header__log">
            <img src={logo} alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <button
                  className="header__link"
                  onClick={() => setPage("blog")}
                >
                  Blog
                </button>
              </li>
              <li className="header__item">
                <button
                  className="header__link"
                  onClick={() => setPage("signIn")}
                >
                  Sign In
                </button>
              </li>
              <li className="header__item">
                <button
                  className="header__link"
                  onClick={() => setPage("signUp")}
                >
                  Sign Up
                </button>
              </li>
              <li className="header__item">
                <ModeButton
                  isBlackTheme={isBlackTheme}
                  handleChangeTheme={handleChangeTheme}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};