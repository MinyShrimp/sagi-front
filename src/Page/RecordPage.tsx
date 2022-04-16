import React, { useEffect } from "react";
import RecordItem from "../Component/RecordItem";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const RecordPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "record"
        }; dispatch( action );
    }, []);

    return (
        <div className="container">
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
        </div>
    );
};

export default RecordPage;