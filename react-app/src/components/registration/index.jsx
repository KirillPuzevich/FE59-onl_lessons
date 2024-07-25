import { useContext } from "react";
import styles from "./styles.scss";
import { MyContext } from "../hooks/context.hook";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ctx = useContext(MyContext);

  const { email } = location.state;
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div
      className={`registration ${ctx.isBlackTheme ? "registration_dark" : ""}`}
    >
      <div className="container">
        <Link to={"/"} className="registration__btn">
          Back to Home
        </Link>
        <h1 className="registration__title">Registration Confirmation</h1>
        <div className="registration__wrapper">
          <div className="registration__content">
            <p className="registration__content_text">
              Please activate your account with the activation
            </p>
            <p className="registration__content_text">
              Check your email <strong>{email}</strong>
            </p>
          </div>
          <button
            className="registration__btn_complet"
            onClick={handleClickHome}
          >
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
};
