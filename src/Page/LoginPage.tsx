import { useEffect, useRef } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const LoginPage = () => {
    const dispatch = useDispatch();

    const idRef  = useRef<string>("");
    const pwdRef = useRef<string>("");

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "login"
        }; dispatch( action );
    }, [])

    const submit = () => {
        console.log( idRef.current, pwdRef.current );
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                <h1 className="mb-3 mt-3" style={{ textAlign: "center" }}> Login </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ID</Form.Label>
                        <Form.Control 
                            type="text"
                            onChange={(e) => {
                                idRef.current = e.target.value;
                                console.log(idRef.current)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>password</Form.Label>
                        <Form.Control 
                            type="password"
                            onChange={(e) => {
                                pwdRef.current = e.target.value;
                            }}
                        />
                    </Form.Group>
                </Form>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Button
                        className = "mb-3"
                        onClick = {submit}
                        style = {{ width: "100px" }}
                    >??????</Button>
                </div>
            </Row>
        </div>
    );
};

export default LoginPage;