import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from 'framer-motion'

const variants = {
  initial: {opacity: 0},
  animate: {
    opacity: 1,
    transition:{
      ease: 'easeInOut'
    }
  },
  exit: { 
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
  tap: { scale: 0.9 },
}

function Home() {
  return (
    <motion.section variants={variants} initial="initial" animate="animate" exit="exit">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <Col md={7} className="home-header">
          <motion.div
            initial={{ translateX: '-100vw', opacity:0 }}
            animate={{ translateX: '0vw', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 25, delay: 1.2}}
          >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> EZRA</strong> FIKADU
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </motion.div>  
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
