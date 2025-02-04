import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{display: 'flex',alignItems:'end'}}>
        <Col md="5" className="footer-copywright">
          <div style={{color: '#fff'}}>
            <h2 style={{color: '#fff',fontWeight: '400'}}>Let's Talk</h2>
            <p>Every project start with a chat. I will be happy to discuss your project.</p>
          </div>
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Copyright © {year} Ezra F.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ezdev21"
                style={{ color: "white", fontSize: '15px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
