import { useEffect } from "react";
import RecordItem from "../Component/RecordItem";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecordPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "record"
        }; dispatch( action );
    }, []);

    return (
        <>
            <div className="container">
                <RecordItem />
                <RecordItem />
                <RecordItem />
                <RecordItem />
                <RecordItem />
                <RecordItem />
            </div>
            <Link to="/addrecord">
                <Button
                    variant="success" 
                    className="add_btn"
                > + </Button>
            </Link>
        </>
    );
};

export default RecordPage;