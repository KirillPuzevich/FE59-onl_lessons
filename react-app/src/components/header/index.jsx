import styles from "./styles.css";
import logo from '../img/logo.svg';

export const Header = ({
  setPage,
}) => {
  return (
    <header className="header">
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};