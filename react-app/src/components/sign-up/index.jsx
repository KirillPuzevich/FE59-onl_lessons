import { useState } from "react";
import styles from "./index.css";

export const SignUp = ({ setPage }) => {
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

  return (
    <div className="sign">
      <div className="container">
        <button className="sign__btn" onClick={() => setPage("home")}>
          Back to Home
        </button>
        <h1 className="sign__title">Sing Up </h1>
        <div className="sign__wrapper">
         <label htmlFor="signName">Name</label>
          <input
            type="text"
            className="sign__input"
            id="signName"
            placeholder="Your name"
            value={values.name}
            onChange={handleChangeName}
          />
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
          <label htmlFor="signConfPass">Confirm password</label>
          <input
            type="text"
            className="sign__input"
            id="signConfPass"
            placeholder="Confirm password"
            value={values.confPass}
            onChange={handleChangeConfPass}
          />
          <button className="sign__save" onClick={() => { handleSave(); setPage("regist"); }}>
            Sign Up
          </button>
          <div className="sign__signup">
            Already have an account?
            <button className="sign__signup_btn" onClick={() => setPage("signIn")}> Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};
