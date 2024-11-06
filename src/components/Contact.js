import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import Form from 'react-bootstrap/Form';

function Contact(){
    const contact = ()=>{

    }
    return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Form onSubmit={contact} style={{backgroundColor:"#472c4c",padding:"15px",borderRadius:"15px"}}>
        <Form.Group className="mb-3 align-left">
          <Form.Label>Subject</Form.Label>
          <Form.Control size="lg" type="text" placeholder="subject" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="message"/>
        </Form.Group>
        <Form.Group className="mb-4 d-flex ">
          <Form.Control type="submit" style={{color:"white",backgroundColor:"purple",padding:"10px"}} value="Submit" />
        </Form.Group>
        </Form>
      </Container>
    </Container>
    )
}
export default Contact;