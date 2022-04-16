import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import BaseModal from "./BaseModal";

const LoginContent = () => {
    const submit = () => {

    }

    return (
        <>
            <h1 className="mb-3 mt-3" style={{ textAlign: "center" }}> Login </h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
        </>
    );
}

const Login = () => {
    const login_show = useSelector((state: RootState) => state.modal.loginModal);
    const dispatch = useDispatch();

    return (
        <BaseModal
            show = { login_show }
            onHide = { () => { dispatch({ type: "login/hide" }); } }
            contents = { <LoginContent/> }
        />
    );
}

export default Login;