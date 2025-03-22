import React from 'react';

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import "./account.css";

export function ConfirmationDialog(props) {
    return (
        <Modal {...props} show={props.message} centered>
            <Modal.Body>{props.message}</Modal.Body>
            <Modal.Footer>
                <Button className="cancel-button"onClick={props.onHide}>Cancel</Button>
                <Button onClick={props.onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}