import { useContext } from "react";
import styles from "./index.css"
import { MyContext } from "../hooks/context.hook";

export const Registration = ({setPage}) =>{

    const ctx = useContext(MyContext);

    return(
        <div className={`registration ${ctx.isBlackTheme ? "registration_dark" : ""}`}>
            <div className="container">
                <button className="registration__btn" onClick={() => setPage("home")}>
                 Back to Home
                </button>
                <h1 className="registration__title">Registration Confirmation</h1>
                <div className="registration__wrapper">
                    <div className="registration__content">
                        <p className="registration__content_text">Please activate your account with the activation</p>
                        <p className="registration__content_text">Check your email</p>
                    </div>
                    <button className="registration__btn_complet" onClick={() => setPage("home")}>Go to home</button>
                </div>
            </div>

        </div>
    )
}