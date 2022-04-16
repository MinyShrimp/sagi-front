import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForumCard = () => {
    return (
        <Link to="#">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <p className="mb-0"><b>김회민</b></p> 
                        <p className="mb-2">2022-04-16 16:57</p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

const ForumPage = () => {
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
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
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
    );
};

export default ForumPage;