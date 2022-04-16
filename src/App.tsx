// import { Button } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Header from "./Component/Header";
import PageHandler from "./Page/PageHandler";
import Footer from "./Component/Footer";
// import { RootState } from "./Store/index";

function App() {
    // const now_page = useSelector((state: RootState) => state.nowpage.nowpage);
    // const dispatch = useDispatch();

    return (
        <div className="App">
            {/* Contents */}
            <Header />
            <PageHandler />
            <Footer />

            {/* Modals */}
        </div>
    );
}

export default App;
