import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import Form from 'react-bootstrap/Form';

function Contact(){
    return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label style={{textAlign:"left"}}><strong>Subject</strong></Form.Label>
          <Form.Control size="lg" type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="send" style={{color:"white",backgroundColor:"purple",padding:"10px"}} value="Submit" />
        </Form.Group>
        </Form>
      </Container>
    </Container>
    )
}
export default Contact;