import { useDispatch } from "react-redux";
import LoginImg from "../assets/login.svg";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="navbar navbar-light bg-light header">
            <div className="container">
                <div className="nav-item">
                    <span className="navbar-brand">사기 ~Sagi~</span>
                </div>
                <div className="nav-item"
                    onClick={() => {
                        dispatch({ type: "login/show" });
                    }}
                >
                    <img src={LoginImg} style={{ height: "42px", cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
}

export default Header;