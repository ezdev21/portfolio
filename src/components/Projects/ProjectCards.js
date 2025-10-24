import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 80 , scale: 0}}
        animate={{ opacity: 1, y: 0 , scale: 1}}
        transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="200px" loading="lazy" style={{objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left", fontWeight: '300', fontSize: '16px' }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Github link and if it's not a Blog then, it will render the below component  */}
        {false && !props.isBlog && props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {false&& !props.isBlog && props.demoLink && (
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
    </motion.div>
  );
}
export default ProjectCards;
