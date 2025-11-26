import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import type { ProjectProps } from "@/utils/projects";

function ProjectCard(props: ProjectProps) {
  return (
    <motion.div
      initial={
        props.order === 3
          ? { opacity: 0, scale: 0.5, x: 300 }
          : { opacity: 0, scale: 0.5, y: 150 }
      }
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <div className="max-md:my-5 p-2 flex flex-col card h-full transition-all duration-500 ease-linear hover:scale-105">
        <img
          src={props.imgPath}
          alt={props.title}
          loading="lazy"
          className="h-50 bg-cover rounded-sm grayscale-70 hover:grayscale-0"
        />
        <div className="m-2">
          <h4 className="font-bold text-lg md:text-xl my-1">{props.title}</h4>
          <p className="text-left max-md:text-sm max-md:font-light font-light">
            {props.description}
          </p>

          <div className="my-2">
            {/* these are the skills used for building the project*/}
            {props.skills && (
              <div className="flex gap-3 flex-wrap">
                {props.skills.map((skill) => (
                  <span className="bg-secondary py-1 px-2 rounded-sm text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex space-x-3 mt-3">
            {/* If the component contains Github link and if it's not a Blog then, it will render the below component  */}
            {!props.isBlog && props.ghLink && (
              <button className="bg-secondary py-1 px-3 rounded-sm">
                <a
                  className="flex items-center space-x-1"
                  href={props.ghLink}
                  target="_blank"
                >
                  <BsGithub />
                  <span>{props.isBlog ? "Blog" : "GitHub"}</span>
                </a>
              </button>
            )}

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

            {!props.isBlog && props.demoLink && (
              <button className="bg-secondary py-1 px-3 rounded-sm">
                <a
                  className="flex items-center space-x-2"
                  href={props.demoLink}
                  target="_blank"
                >
                  <CgWebsite />
                  <span>Demo</span>
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
