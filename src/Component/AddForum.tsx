import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import BaseModal from "./BaseModal";

const AddForum = () => {
    const addforum_show = useSelector((state: RootState) => state.modal.addForumModal);
    const dispatch = useDispatch();

    return (
        <BaseModal
            show = { addforum_show }
            onHide = { () => { dispatch({ type: "addforum/hide" }); } }
            contents = { "add forum" }
        />
    );
}

export default AddForum;