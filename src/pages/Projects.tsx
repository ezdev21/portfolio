import ecommerce from "@assets/Projects/ecommerce_optimized.png";
import video_sharing from "@assets/Projects/video-sharing_optimized.png";
import pool from "@assets/Projects/pool_optimized.png";
import madot from "@assets/Projects/madot_optimized.png";
import tiruhakim from "@assets/Projects/tiruhakim_optimized.png";
import union from "@assets/Projects/union_optimized.png";
import jestra from "@assets/Projects/jestra_optimized.png";
import biritu from "@assets/Projects/biritu_optimized.png";
import haddisArt from "@assets/Projects/haddisart_optimized.png";
import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";

const projects  = [
  {
    imgPath: haddisArt,
    isBlog: false,
    title: "Haddis Art",
    description: "Haddis Art is an online art gallery that showcases and sells artwork from various artists. It provides a platform for artists to display their work and for art enthusiasts to discover and purchase unique pieces.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
  {
    imgPath: biritu,
    isBlog: false,
    title: "Biritu",
    description: "A Digital Savings Account (Biritu) is an electronic version of a regular Savings Account. With a paperless, quick and secure account opening process",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: []
  },
  {
    imgPath: pool,
    isBlog: false,
    title: "Pool Taxi",
    description: "Pool Taxi is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. It offers transportation services to people, organizations, and institutions.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: []
  },
  {
    imgPath: tiruhakim,
    isBlog: false,
    title: "Tiruhakim",
    description: "TiruHakim is an online database of patient reviews for doctors and facilities in Ethiopia. we give you the tools you need to find the best provider for you!",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
  {
    imgPath: jestra,
    isBlog: false,
    title: "Jestra",
    description: "Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: []
  },
  {
    imgPath: ecommerce,
    isBlog: false,
    title: "Ecommerce",
    description: "ecommerce app project made in laravel, Vuejs and tailwindcss. get latest products,full search feature included,watch later products and add to cart",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: []   
  },
  {
    imgPath: madot,
    isBlog: false,
    title: "Madot Solutions",
    description: "The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: []
  },
  {
    imgPath: video_sharing,
    isBlog: false,
    title: "Video sharing",
    description: "video sharing website made with laravel,Vuejs and tailwindcss. watch videos, create channel, upload videos, like and comment on videos, create playlist, subscribe channels, get notifications.!!",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: []
  },
  {
    imgPath: union,
    isBlog: false,
    title: "Union Academy",
    description: "Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: []
  },
]

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
