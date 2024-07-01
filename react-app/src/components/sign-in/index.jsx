import { useState, useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import styles from "./index.css";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";


export const SignIn = ({ setPage }) => {

  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", pass: "" });

  const handleChangeEmail = (event) => {
    setValues((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handleChangePass = (event) => {
    setValues((prevState) => ({ ...prevState, pass: event.target.value }));
  };

  const handleSave = () => {
    console.log("Отправляем все данные в values на сервер: ", values);
    setValues({ email: "", pass: "" });
  };

  const handleClickSign = () => {
    navigate("/success"); 
  };

  const ctx = useContext(MyContext);

  return (
    <div className={`sign  ${ctx.isBlackTheme ? "sign_dark" : ""}`}>
      <div className="container">
      <Link to={"/"} className="sign__btn">Back to home</Link>
        <h1 className="sign__title">Sing in </h1>
        <div className="sign__wrapper">
          <label htmlFor="signEmail">Email</label>
          <input
            type="text"
            className="sign__input"
            id="signEmail"
            placeholder="Your email"
            value={values.email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="signPass">Password</label>
          <input
            type="text"
            className="sign__input"
            id="signPass"
            placeholder="Password"
            value={values.pass}
            onChange={handleChangePass}
          />
          <button className="sign__forgot">Forgot password?</button>
          <button className="sign__save" onClick={() => { handleSave(); handleClickSign(); }}>
            Sign In
          </button>
          <div className="sign__signup">
            Don't have an account?
            <Link to={"/signUp"} className="sign__signup_btn">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
