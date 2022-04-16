import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Header from "./Component/Header";
import PageHandler from "./Page/PageHandler";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import AddRecord from "./Component/AddRecord";
import AddForum  from "./Component/AddForum";
import { RootState } from "./Store/index";

function App() {
    const now_page = useSelector((state: RootState) => state.nowpage.nowpage);
    const dispatch = useDispatch();

    return (
        <div className="App">
            {/* Contents */}
            <Header />
            <PageHandler />
            <Footer />

            {/* Buttons */}
            <Button 
                variant="success" 
                className="add_btn"
                onClick={() => {
                    if( now_page === 'forum' )  {
                        dispatch({ type: 'addforum/show' });
                    } else {
                        dispatch({ type: 'addrecord/show' });
                    }
                }}
            > + </Button>

            {/* Modals */}
            <Login />
            <AddRecord />
            <AddForum />
        </div>
    );
}

export default App;
