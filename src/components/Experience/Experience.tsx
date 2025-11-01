import { Col, Container, Row } from "react-bootstrap";

export default function Experience() {
    return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Professional Experience
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}