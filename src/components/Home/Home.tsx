import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from 'framer-motion'

const variants = {
  exit: { 
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  },
  tap: { scale: 0.9 },
}

function Home() {
  return (
    <motion.section variants={variants} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> EZRA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </motion.section>
  );
}

export default Home;
