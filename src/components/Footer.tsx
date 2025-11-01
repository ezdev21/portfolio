import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{display: 'flex',alignItems:'end'}}>
        <Col md="6" className="footer-copywright">
          <div style={{color: '#fff', display: 'flex', flexDirection:'column', alignItems:'start'}}>
            <h2 style={{color: '#fff',fontWeight: '400'}}>Get in touch</h2>
            <h3 className="text-start">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</h3>
          </div>
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Copyright © {year} Ezra F.</h3>
        </Col>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:ezradev21@gmail.com"
                style={{ color: "white", fontSize: '15px' }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail size={25} />
              </a>
            </li>
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
