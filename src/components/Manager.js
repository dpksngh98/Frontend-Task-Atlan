import React, {useState} from 'react';
import { Col, Form, Row, Button, Modal } from 'react-bootstrap';
import './Pages.css';
function Manager() {

 const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose} className="modalcss">
        <Modal.Header closeButton>
          <Modal.Title className="head">Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
    <Row className="align-items-center">
    <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Choose Team</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Chennai Super Kings</option>
            <option>Mumbai Indians</option>
            <option>Royal Challengers Bangaore</option>
            <option>Kings XI Punjab</option>
            <option>Sunrisers Hyderabad</option>
            <option>Delhi Capitals</option>
            <option>Kolkata Knight Riders</option>
            <option>Rajasthan Royals</option>
         </Form.Control>
        </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Belonging Country</Form.Label>
    <Form.Control as="select" defaultValue="India">
        <option>India</option>
        <option>Australia</option>
        <option>West Indies</option>
        <option>South Africa</option>
        <option>England</option>
        <option>Sri Lanka</option>
        <option>Bangladesh</option>
    </Form.Control>
    </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Batsman" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Baller" />
  </Form.Group>
        
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Experience</Form.Label>
    <Form.Control as="select" defaultValue="1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </Form.Control>
    </Form.Group>
    </Col>
</Row>
<Row>
    <Col align="center">

    </Col>
</Row>
</Form>

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset Filter
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Filter
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default Manager;
