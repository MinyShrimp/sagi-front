import { useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const SignupPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "signup"
        }; dispatch( action );
    }, [])

    const submit = () => {
        
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                <h1 className="mb-3 mt-3" style={{ textAlign: "center" }}> Signup </h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </Form>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Button
                        className = "mb-3"
                        onClick = {submit}
                        style = {{ width: "100px" }}
                    >확인</Button>
                </div>
            </Row>
        </div>
    );
};

export default SignupPage;