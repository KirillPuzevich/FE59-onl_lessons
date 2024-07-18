import { useContext, useEffect } from "react";
import styles from "./styles.scss"
import { MyContext } from "../hooks/context.hook";
import { Link } from "react-router-dom";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {getUserInfoMiddlewareAction } from "../../store/actions";
import { Spinner } from '../spinner';

export const UserPage= () =>{

    const userToken = useSelector((state) => state.token);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const ctx = useContext(MyContext);

    const user = useSelector((state) => state.user.content);

    console.log(user.content)
    useEffect(() => {

        dispatch(getUserInfoMiddlewareAction(userToken.access));
      }, []);

    const handleClickHome = () => {
        navigate("/"); 
      };

      if (!user) {
        return <Spinner />;
      }

    return(
        <div className={`user ${ctx.isBlackTheme ? "user_dark" : ""}`}>
            <div className="container">
            <   Link to={"/"} className="user__btn">Back to home</Link>   
                <h1 className="user_title">Profile</h1>
                <div className="user__wrapper">
                    <div className="user__content">
                        <p className="user__content_text">Name: <strong>{user.username}</strong></p>
                        <p className="user__content_text">Email: <strong>{user.email}</strong></p>
                    </div>
                    <button className="user__btn_complet" onClick={handleClickHome}>Go to home</button>
                </div>
            </div>

        </div>
    )
}