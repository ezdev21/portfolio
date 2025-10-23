import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    // <motion.div
    //     initial={{ opacity: 0, y: 80, x: 0 }}
    //     animate={{ opacity: 1, y: 0, x: 0 }}
    //     transition={{ duration: 1, delay: 0 }}
    // >
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" loading="lazy"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Github link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
    // </motion.div>
  );
}
export default ProjectCards;
