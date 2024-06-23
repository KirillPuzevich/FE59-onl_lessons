import styles from "./index.css"

export const Registration = ({setPage}) =>{
    return(
        <div className="registration">
            <div className="container">
                <button className="registration__btn" onClick={() => setPage("home")}>
                 Back to Home
                </button>
                <h1 className="registration__title">Registration Confirmation</h1>
                <div className="registration__wrapper">
                    <div className="registration__content">
                        <p className="registration__content_text">Please activate your account with the activation</p>
                        <p className="registration__content_text">Link in the email <b>example@gmail.com</b></p>
                        <p className="registration__content_text">Please check your email</p>
                    </div>
                    <button className="registration__btn_complet" onClick={() => setPage("home")}>Go to home</button>
                </div>
            </div>

        </div>
    )
}