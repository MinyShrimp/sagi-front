import { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const AddForumPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "addforum"
        }; dispatch( action );
    }, [])
    

    const submit = () => {
        
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                
            </Row>
        </div>
    );
};

export default AddForumPage;