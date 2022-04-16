import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForumCard = () => {
    return (
        <Link to="#">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <span className="mb-0"><b>김회민</b></span> <br/>
                        <span className="mb-2">2022-04-16 16:57</span> <br/>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default ForumCard;