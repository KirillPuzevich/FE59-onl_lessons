import { useContext } from "react";
import styles from "./index.css"
import { MyContext } from "../hooks/context.hook";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

export const Success = ({setPage}) =>{

    const navigate = useNavigate();

    const ctx = useContext(MyContext);

    const handleClickHome = () => {
        navigate("/"); 
      };

    return(
        <div className={`success ${ctx.isBlackTheme ? "success_dark" : ""}`}>
            <div className="container">
            <   Link to={"/"} className="success__btn">Back to home</Link>   
                <h1 className="success__title">Success </h1>
                <div className="success__wrapper">
                    <div className="success__content">
                        <p className="success__content_text">Email confirmed</p>
                        <p className="success__content_text">Your registration is now completed!</p>
                    </div>
                    <button className="success__btn_complet" onClick={() => {handleClickHome()}}>Go to home</button>
                </div>
            </div>

        </div>
    )
}