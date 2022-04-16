import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserPage      from "./UserPage";
import RecordPage    from "./RecordPage";
import ForumPage     from "./ForumPage";
import ContactPage   from "./ContactPage";
import LoginPage     from "./LoginPage";
import AddRecordPage from "./AddRecordPage";
import AddForumPage  from "./AddForumPage";

const PageHandler = () => {
    useEffect(() => {
        console.log("page handler");
    }, []);

    return (
        <div className="contents">
            <div className="page">
                <Routes>
                    <Route path="/"          element={<UserPage      />} />
                    <Route path="/record"    element={<RecordPage    />} />
                    <Route path="/forum"     element={<ForumPage     />} />
                    <Route path="/contact"   element={<ContactPage   />} />
                    <Route path="/login"     element={<LoginPage     />} />
                    <Route path="/addrecord" element={<AddRecordPage />} />
                    <Route path="/addforum"  element={<AddForumPage  />} />
                </Routes>
            </div>
        </div>
    );
};

export default PageHandler;
