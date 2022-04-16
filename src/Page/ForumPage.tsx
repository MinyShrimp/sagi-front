import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ForumCard from "../Component/ForumCard";
import { NowPageAction } from "../Store/nowpage";

const ForumPage = () => {
    const dispatch = useDispatch();
    

    const handleResize = () => {
        var cards = document.getElementsByClassName('card_rows');
        var i = 0;

        if( window.innerWidth <= 800 ) {
            for( i = 0; i < cards.length; i++ ) {
                cards[i].classList.add( 'flex-direction-column' );
            }
        } else {
            for( i = 0; i < cards.length; i++ ) {
                cards[i].classList.remove( 'flex-direction-column' );
            }
        }
    }

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "forum"
        }; dispatch( action );

        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <>
            <div className="container pt-3 pb-3">
                <h1> 자랑하기 </h1>
                <Row className="card_rows">
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                </Row>
                <Row className="card_rows">
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                </Row>
                <Row className="card_rows">
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                    <Col className="mb-3"> <ForumCard /> </Col>
                </Row>
            </div>
            <Link to="/addforum">
                <Button
                    variant="success" 
                    className="add_btn"
                > + </Button>
            </Link>
        </>
    );
};

export default ForumPage;