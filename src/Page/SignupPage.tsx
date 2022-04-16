import { useEffect, useRef } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const SignupPage = () => {
    const dispatch = useDispatch();
    
    const idRef     = useRef<string>("");
    const emailRef  = useRef<string>("");
    const nameRef   = useRef<string>("");
    const pwdRef    = useRef<string>("");

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "signup"
        }; dispatch( action );
    }, [])

    const submit = () => {
        console.log(
            idRef.current, emailRef.current, 
            nameRef.current, pwdRef.current);
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                <h1 className="mb-3 mt-3" style={{ textAlign: "center" }}> Signup </h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={(e) => {
                                nameRef.current = e.target.value;
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={(e) => {
                                idRef.current = e.target.value;
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            placeholder="name@example.com"
                            type="email" 
                            onChange={(e) => {
                                emailRef.current = e.target.value;
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                    >확인</Button>
                </div>
            </Row>
        </div>
    );
};

export default SignupPage;