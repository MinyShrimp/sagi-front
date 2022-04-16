import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NowPageAction } from "../Store/nowpage";
import { RootState }     from "../Store/index";
import { Forum, DummyForum }         from "../Interface/Forum";

const AddForumPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const forum    = useSelector((state: RootState) => state.forum);

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "addforum"
        }; dispatch( action );
        dispatch({ type: "forum/clean" });
    }, []);
    
    const submit = () => {
        console.log(forum);
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
                                <Form.Control 
                                    type="text" 
                                    onChange={(e) => {
                                        const _tmp = {...DummyForum};
                                        _tmp.title = e.target.value;
                                        dispatch({ type: "forum/setTitle", forum: _tmp })
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>날짜</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    onChange={(e) => {
                                        const _tmp = {...DummyForum};
                                        _tmp.date = e.target.value;
                                        dispatch({ type: "forum/setDate", forum: _tmp })
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>첨부파일</Form.Label>
                        <Form.Control 
                            type="file" 
                            onChange={(e: any) => {
                                const _tmp = {...DummyForum};
                                _tmp.file = e.target.files[0];
                                dispatch({ type: "forum/setFile", forum: _tmp })
                            }}
                            accept="image/png, image/jpeg"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>내용</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={10} 
                            onChange={(e) => {
                                const _tmp = {...DummyForum};
                                _tmp.contents = e.target.value;
                                dispatch({ type: "forum/setContents", forum: _tmp })
                            }}
                        />
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