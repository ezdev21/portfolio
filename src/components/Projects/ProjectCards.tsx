import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

interface ProjectCardProps{
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
}

function ProjectCards(props: ProjectCardProps) {
  return (
    <motion.div
        initial={props.order===3 ?  { opacity:0, scale: 0.5, x:'-15vw'} :  { opacity:0, scale: 0.5, y: '-30vh'} }
        whileInView={{ opacity: 1, scale: 1, x:0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
    >
    <Card className="project-card-view">
      <Image src={props.imgPath} alt={props.title} fluid loading="lazy" style={{height: "200px", objectFit: 'cover', borderRadius: '6px', margin: '10px'}}/>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
        <Card.Text style={{ color: 'lightgray', textAlign: "left", fontWeight: 'lighter', fontSize: '16px' }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Github link and if it's not a Blog then, it will render the below component  */}
        {/* {false && !props.isBlog && props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}

        {"\n"}
        {"\n"} */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {false&& !props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
    </motion.div>
  );
}
export default ProjectCards;
