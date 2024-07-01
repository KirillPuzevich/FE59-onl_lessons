import styles from "./styles.css";
import { Link } from "react-router-dom";
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
                <Link to="blog" className="header__link">
                Blog
                </Link>
              </li>
              <li className="header__item">
              <Link to="signIn" className="header__link">
                Sign In
                </Link>
              </li>
              <li className="header__item">
              <Link to="signUp" className="header__link">
                Sign Up
                </Link>
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