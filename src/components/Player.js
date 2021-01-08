import React, {useState} from 'react';
import { Col, Form, Row, Button, Modal } from 'react-bootstrap';
import './Pages.css';
function Player() {

 const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose} className="modalcss">
        <Modal.Header closeButton>
          <Modal.Title className="head">Players</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
    <Row className="align-items-center">
    <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select Team</Form.Label>
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
    <Form.Label>Strike Rate</Form.Label>
    <Form.Control as="select" defaultValue="0 - 50">
        <option>0 - 50</option>
        <option>51 - 100</option>
        <option>101 - 150</option>
        <option>151 - 250</option>
        <option>251 - 350</option>
        <option>>351</option>
    </Form.Control>
    </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Man of the Matches Won</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>>7</option>
    </Form.Control>
    </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
        <Form.Label>PlayOffs Played</Form.Label>
        <Form.Control as="select" htmlSize={3} custom defaultValue="0">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        </Form.Control>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Categories</Form.Label>
    <Form.Control as="select" defaultValue="Select...">
        <option>Select...</option>
        <option>Batsman</option>
        <option>Baller</option>
        <option>Allrounder</option>
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
export default Player;
