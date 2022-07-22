import React, { Component,   useState  } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App';
import SearchResult from '../SearchResult/SearchResult';
import Data from '../SearchResult/data.json';

export function ModalReusable (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>  
<Button variant="primary" onClick={handleShow}>
Launch demo modal
</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.ans}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.question}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}


export default ModalReusable;