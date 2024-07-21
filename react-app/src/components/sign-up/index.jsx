import { useState, useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import styles from "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SIGN_UP_MIDDLEWARE_ACTION } from "../../store/actions";


export const SignUp = () => {
  const ctx = useContext(MyContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", password: "", confPass: "", group: "", });

  const user = useSelector((state) => state.user)

  console.log(user);

  const handleChangeName = (event) => {
    setValues((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setValues((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handleChangePass = (event) => {
    setValues((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const handleChangeConfPass = (event) => {
    setValues((prevState) => ({ ...prevState, confPass: event.target.value }));
  };

  const handleChangeGroup = (event) => {
    setValues((prevState) => ({ ...prevState, group: event.target.value }));
  };

  const handleSave = () => {
    dispatch(SIGN_UP_MIDDLEWARE_ACTION(values, navigate));
    
  };

  return (
    <div className={`signs  ${ctx.isBlackTheme ? "signs_dark" : ""}`}>
      <div className="container">
        <Link to={"/"} className="signs__btn">Back to Home</Link>
        <h1 className="signs__title">Sing Up </h1>
        <div className="signs__wrapper">
          <label htmlFor="signName">Name</label>
          <input
            type="text"
            className="signs__input"
            id="signName"
            placeholder="Your name"
            value={values.name}
            onChange={handleChangeName}
          />
          {user.errors.username && (
            <p className="signs__error">{user.errors.username.join(", ")}</p>
          )}
          <label htmlFor="signEmail">Email</label>
          <input
            type="text"
            className="signs__input"
            id="signEmail"
            placeholder="Your email"
            value={values.email}
            onChange={handleChangeEmail}
          />
          {user.errors.email && (
            <p className="signs__error">{user.errors.email.join(", ")}</p>
          )}
          <label htmlFor="signPass">Password</label>
          <input
            type="text"
            className="signs__input"
            id="signPass"
            placeholder="Password"
            value={values.password}
            onChange={handleChangePass}
          />
          {user.errors.password && (
            <p className="signs__error">{user.errors.password.join(", ")}</p>
          )}
          
          <label htmlFor="signConfPass">Group</label>
          <input
            type="number"
            className="signs__input"
            id="signGroup"
            placeholder="Group number"
            value={values.group}
            onChange={handleChangeGroup}
          />
          <button className="signs__save" onClick={handleSave}>
            Sign Up
          </button>
          <div className="signs__signup">
            Already have an account?
            <Link to={"/signIn"} className="signs__signup_btn">Sign In</Link>
          </div>
        </div>
      </div>
    </div>

  );
};
