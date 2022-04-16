import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "./App.css";
import Header from "./Component/Header";
import PageHandler from "./Page/PageHandler";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import AddRecord from "./Component/AddRecord";

function App() {
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
                    dispatch({ type: 'addrecord/show' });
                }}
            > + </Button>

            {/* Modals */}
            <Login />
            <AddRecord />
        </div>
    );
}

export default App;
