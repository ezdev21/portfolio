import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/projects";

const variants = {
    exit: { 
      initial: {opacity: 0},
    animate: {
      opacity: 1,
      transition:{
        ease: 'easeInOut'
      }
    },
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
}

function Projects() {
  return (
    <motion.section variants={variants} exit="exit">
    <div className="relative pt-[110px] pb-[30px] bg-linear-to-bl from-[rgba(17,16,16,0.582)] to-[rgba(12,8,24,0.904)]">
      <div>
        <motion.div
          initial={{ translateY: '-100px' }}
          animate={{ translateY: '0px' }}
          transition={{ type: 'spring', stiffness: 300}}
        >
        <h1 className="text-white text-2xl md:text-4xl font-medium py-5 text-center">My Recent <strong className="text-primary">Works </strong></h1>
        <p className="text-white text-lg md:text-2xl max-md:font-extralight text-center md:leading-3">
          Here are a few projects I've worked on recently.
        </p>
        </motion.div>
        <div className="grid md:grid-cols-3 pb-2.5 px-2 md:px-16 overflow-hidden">
          {projects.map(project=>(
            <div className="md:px-6 md:py-12">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                order={project.order}
                skills={project.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.section>
  );
}

export default Projects;
