import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

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
    <div className="max-md:my-5 p-2 flex flex-col text-white bg-transparent h-full opacity-90 transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
      <img src={props.imgPath} alt={props.title} loading="lazy" className="h-[200px] bg-cover rounded-sm"/>
      <div className="m-2">
        <h4 className="font-bold text-lg md:text-xl my-1">{props.title}</h4>
        <p className="text-left max-md:text-sm max-md:font-light font-light">
          {props.description}
        </p>

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
      </div>
    </div>
    </motion.div>
  );
}
export default ProjectCards;
