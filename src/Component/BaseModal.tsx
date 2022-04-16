import { Modal } from "react-bootstrap";

function BaseModal( props: any ) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body
                style={{ minWidth: "500px" }}
            >
                { props.contents }
            </Modal.Body>
        </Modal>
    );
}

export default BaseModal;