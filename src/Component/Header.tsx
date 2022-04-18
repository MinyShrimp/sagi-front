import { Link }  from "react-router-dom";
import LoginImg  from "../assets/login.svg";
import LogoutImg from "../assets/logout.svg";
import SinupImg  from "../assets/signup.svg";

const Header = () => {
    return (
        <div className="navbar navbar-light bg-light header">
            <div className="container">
                <div className="nav-item">
                    <span className="navbar-brand">사기 ~Sagi~</span>
                </div>
                <div className="nav-item">
                    <Link to="/signup" style={{ marginRight: "15px" }}>
                        <img src={SinupImg} style={{ height: "42px", cursor: "pointer" }} alt="signup" />
                    </Link>

                    <Link to="/login">
                        <img src={LoginImg} style={{ height: "42px", cursor: "pointer" }} alt="login" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;