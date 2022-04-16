import userImg from "../assets/user.svg";
import recordImg from "../assets/record.svg";
import smsImg from "../assets/sms.svg";
import phoneImg from "../assets/phone.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="row footer">
                <Link className="col nav-link" to="/" style={{ borderRight: "1px solid #e5e6e7" }}>
                    <img src={recordImg} alt="" />
                </Link>
                <Link className="col nav-link" to="/record" style={{ borderRight: "1px solid #e5e6e7" }}>
                    <img src={userImg} alt="" />
                </Link>
                <Link className="col nav-link" to="/forum" style={{ borderRight: "1px solid #e5e6e7" }}>
                    <img src={smsImg} alt="" />
                </Link>
                <Link className="col nav-link" to="/contact">
                    <img src={phoneImg} alt="" />
                </Link>
            </div>
        </>
    );
};

export default Footer;
