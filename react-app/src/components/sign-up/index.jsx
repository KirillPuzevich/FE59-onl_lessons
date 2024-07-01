import { useState, useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import styles from "./index.css";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


export const SignUp = ({ setPage }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "", confPass: "" });

  const handleChangeName = (event) => {
    setValues((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const handleChangeEmail = (event) => {
    setValues((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handleChangePass = (event) => {
    setValues((prevState) => ({ ...prevState, pass: event.target.value }));
  };

  const handleChangeConfPass = (event) => {
    setValues((prevState) => ({ ...prevState, confPass: event.target.value }));
  };

  const handleSave = () => {
    console.log("Отправляем все данные в values на сервер: ", values);
    setValues({ name:"", email: "", pass: "", confPass: "" });
  };

  const handleClickReg = () => {
    navigate("/regist"); 
  };

  const ctx = useContext(MyContext);

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
          <label htmlFor="signEmail">Email</label>
          <input
            type="text"
            className="signs__input"
            id="signEmail"
            placeholder="Your email"
            value={values.email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="signPass">Password</label>
          <input
            type="text"
            className="signs__input"
            id="signPass"
            placeholder="Password"
            value={values.pass}
            onChange={handleChangePass}
          />
          <label htmlFor="signConfPass">Confirm password</label>
          <input
            type="text"
            className="signs__input"
            id="signConfPass"
            placeholder="Confirm password"
            value={values.confPass}
            onChange={handleChangeConfPass}
          />
          <button className="signs__save" onClick={() => { handleSave(); handleClickReg();  }}>
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
