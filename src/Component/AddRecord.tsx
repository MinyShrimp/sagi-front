import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import BaseModal from "./BaseModal";

const AddRecord = () => {
    const addrecord_show = useSelector((state: RootState) => state.modal.addRecordModal);
    const dispatch = useDispatch();

    return (
        <BaseModal
            show = { addrecord_show }
            onHide = { () => { dispatch({ type: "addrecord/hide" }); } }
            contents = { "add record" }
        />
    );
}

export default AddRecord;