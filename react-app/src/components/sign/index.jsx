import { useState } from "react";
import styles from "./index.css";

export const Sign = ({ setPage }) => {
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

  return (
    <div className="sign">
      <div className="container">
        <button className="sign__btn" onClick={() => setPage("home")}>
          Back to Home
        </button>
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
          <button className="sign__save" onClick={() => { handleSave(); setPage("success"); }}>
            Sign In
          </button>
          <div className="sign__signup">
            Don't have an account?
            <button className="sign__signup_btn"> Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
