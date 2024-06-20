import styles from "./index.css"

export const Success = ({setPage}) =>{
    return(
        <div className="success">
            <div className="container">
                <button className="success__btn" onClick={() => setPage("home")}>
                 Back to Home
                </button>
                <h1 className="success__title">Success </h1>
                <div className="success__wrapper">
                    <div className="success__content">
                        <p className="success__content_text">Email confirmed</p>
                        <p className="success__content_text">Your registration is now completed!</p>
                    </div>
                    <button className="success__btn_complet" onClick={() => setPage("home")}>Go to home</button>
                </div>
            </div>

        </div>
    )
}