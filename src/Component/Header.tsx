import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login.svg";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="navbar navbar-light bg-light header">
            <div className="container">
                <div className="nav-item">
                    <span className="navbar-brand">사기 ~Sagi~</span>
                </div>
                <Link className="nav-item" to="/login">
                    <img src={LoginImg} style={{ height: "42px", cursor: "pointer" }} />
                </Link>
            </div>
        </div>
    );
}

export default Header;