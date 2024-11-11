import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Gimp(){
  return(
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>Gimp Projects</h1>
          <div className="d-flex">
            <img className="col-md-3" src="../../Assets/Projects/pool_optimized.png" alt="gimp project"/>
          </div>
        </div>
    </Container>
    </Container>
  );
}
export default Gimp;