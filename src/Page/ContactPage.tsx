import React, { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const ContactPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "contact"
        }; dispatch( action );
    }, [])

    const [email,    setEmail]    = useState("");
    const [title,    setTitle]    = useState("");
    const [contents, setContents] = useState("");

    const submit = () => {
        console.log( email, title, contents )
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                <h1 className="mb-3" style={{ textAlign: "center" }}> 무슨 문제가 생겼나요? 😭 </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>회신용 Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => { setEmail( e.target.value ); }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control 
                            type="text"
                            value={title}
                            onChange={(e) => { setTitle( e.target.value ); }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>설명</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={5} 
                            value={contents}
                            onChange={(e) => { setContents( e.target.value ); }}
                        />
                    </Form.Group>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button
                            onClick = {submit}
                        >보내기</Button>
                    </div>
                </Form>
            </Row>
        </div>
    );
};

export default ContactPage;