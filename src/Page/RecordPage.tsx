import React, { useEffect } from "react";
import RecordItem from "../Component/RecordItem";

const RecordPage = () => {
    useEffect(() => {
        console.log("record page")
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