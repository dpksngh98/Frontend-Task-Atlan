import React, {useState} from 'react';
import { Col, Form, Row, Button, Modal } from 'react-bootstrap';
import './Pages.css';
function Venue() {

 const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose} className="modalcss">
        <Modal.Header closeButton>
          <Modal.Title className="head">Venue</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
    <Row className="align-items-center">
    <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Choose Venue</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Wankhede Stadium</option>
            <option>Rajiv Gandhi International Cricket Stadium</option>
            <option>M. A. Chidambaram Stadium</option>
            <option>Sawai Mansingh Stadium</option>
            <option>Holkar Stadium</option>
            <option>Feroz Shah Kotla Ground</option>
            <option>Eden Gardens</option>
            <option>Green Park Stadium</option>
         </Form.Control>
        </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Trophies Won</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
    </Form.Control>
    </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Number of Matches Played</Form.Label>
    <Form.Control as="select" custom>
      <option>5</option>
      <option>10</option>
      <option>20</option>
      <option>30</option>
      <option>50</option>
    </Form.Control>
  </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Home Team Win Percentage</Form.Label>
    <Form.Control as="select" defaultValue=">25%">
        <option>>25%</option>
        <option>>50%</option>
        <option>>75%</option>
        <option>>90%</option>
        <option>>100%</option>
    </Form.Control>
    </Form.Group>
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
export default Venue;
