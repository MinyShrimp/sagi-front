import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { NowPageAction } from "../Store/nowpage";

const AddForumPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "addforum"
        }; dispatch( action );
    }, [])
    
    const submit = () => {
        
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center" }}>
                <h1 className="mb-3 mt-3" style={{ textAlign: "center" }}> 자랑하기 </h1>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>제목</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>날짜</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>첨부파일</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" rows={10} />
                    </Form.Group>

                    <Row className="mb-3" style={{ justifyContent: "center" }}>
                    <Col style={{ textAlign: "right" }}>
                        <Button 
                            style={{ width: "50%", boxShadow: "1px 1px 3px gray" }}
                            onClick={submit}
                        > 등록 </Button>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        <Button 
                            className="btn-danger"
                            style={{ width: "50%", boxShadow: "1px 1px 3px gray" }}
                            onClick={() => { navigate(-1) }}
                        > 취소 </Button>
                    </Col>
                </Row>
                </Form>
            </Row>
        </div>
    );
};

export default AddForumPage;