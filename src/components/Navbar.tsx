import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillStar,
} from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { Button } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeKey, setActiveKey] = useState('/');

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      updateNavbar(true);
    }
    if(window.scrollY < 50){
      updateNavbar(false);
    }
  });

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Nav.Link as={Link} to="/" className="">
          <h1
          style={{color: '#c770f0', fontWeight: '900', fontFamily: 'Azeret Mono'}}
          >&lt;E/&gt;</h1>
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)} className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px", display: 'inline !important' }}/>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                eventKey="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                eventKey="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experience"
                eventKey="/experience"
                onClick={() => updateExpanded(false)}
              >
                <RiBuilding2Line
                  style={{ marginBottom: "2px" }}
                />
                <span>Experience</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                eventKey="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://x.com/ezdev21"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Hire
              </Nav.Link>
            </Nav.Item> */}

             <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/ezdev21/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
