import styles from "./styles.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ModeButton } from "../mode-button";
import { useDispatch, useSelector } from "react-redux";
import logo from "../img/logo.svg";
import person from "../img/person.svg";
import { getUserInfoMiddlewareAction } from "../../store/actions";

export const Header = () => {
  const user = useSelector((state) => state.user.content);
  console.log(user);
  const dispatch = useDispatch();
  const isBlackTheme = useSelector((state) => state.isBlackTheme);
  const header = useRef(null);

  const isAuth = localStorage.getItem("isAuth");

  return (
    <header
      className={`header ${isBlackTheme ? "header_black" : ""}`}
      ref={header}
    >
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link to="blog/all" className="header__link">
                  Blog
                </Link>
              </li>
              <li className="header__item">
                <Link to="signIn" className="header__link">
                  Sign In
                </Link>
              </li>
              <li className="header__item">
                {isAuth ? (
                  <Link to="userPage" className="header__logo">
                    <img className="header__logo" src={person} alt="" />
                  </Link>
                ) : (
                  <Link to="signUp" className="header__link" key="signup">
                    Sign Up
                  </Link>
                )}
              </li>
              <li className="header__item">
                <ModeButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
