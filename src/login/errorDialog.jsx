import React from 'react';

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

export function ErrorDialog(props) {
    return (
        <Modal {...props} show={props.message} centered>
            <Modal.Body>{props.message}</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}