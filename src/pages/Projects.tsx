import ProjectCard from "@components/Projects/ProjectCards";
import ecommerce from "@assets/Projects/ecommerce_optimized.png";
import video_sharing from "@assets/Projects/video-sharing_optimized.png";
import pool from "@assets/Projects/pool_optimized.png";
import madot from "@assets/Projects/madot_optimized.png";
import tiruhakim from "@assets/Projects/tiruhakim_optimized.png";
import union from "@assets/Projects/union_optimized.png";
import jestra from "@assets/Projects/jestra_optimized.png";
import social_media from "@assets/Projects/social-media_optimized.png";
import biritu from "@assets/Projects/biritu_optimized.png";
import haddisArt from "@assets/Projects/haddisart_optimized.png";
import iims from "@assets/Projects/iims_optimized.png";
import { motion } from "framer-motion";

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

          {/* <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={iims}
              isBlog={false}
              title="IIMS"
              description="Industry Management System (IIMS) is a comprehensive software solution designed to streamline and optimize various industrial operations, including inventory management, production planning, quality control, and supply chain logistics."  
              demoLink=""
            />
          </div> */}

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={haddisArt}
              isBlog={false}
              title="Haddis Art"
              description="Haddis Art is an online art gallery that showcases and sells artwork from various artists. It provides a platform for artists to display their work and for art enthusiasts to discover and purchase unique pieces."  
              demoLink=""
              ghLink=""
              order={1}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={biritu}
              isBlog={false}
              title="Biritu"
              description="A Digital Savings Account (Biritu) is an electronic version of a regular Savings Account. With a paperless, quick and secure account opening process"
              demoLink=""
              ghLink=""
              order={2}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={pool}
              isBlog={false}
              title="Pool Taxi"
              description="Pool Taxi is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. Which works in providing solution towards solving problems. Among these technology-based systems; POOL technology offers transportation services to people, organizations, and institutions."
              demoLink=""
              ghLink=""
              order={3}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={tiruhakim}
              isBlog={false}
              title="Tiruhakim"
              description="TiruHakim is an online database of patient reviews for doctors and facilities in Ethiopia. we give you the tools you need to find the best provider for you!"  
              demoLink=""
              ghLink=""
              order={1}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={jestra}
              isBlog={false}
              title="Jestra"
              description="Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.it can have a positive impact on a business’s bottom line and the customer’s experience by reducing the costs related to shipping, storage, and spoilage and ensuring customers receive their products as expected"
              demoLink=""
              ghLink=""
              order={2}
            />
          </div>
          
          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="ecommerce app project made in laravel, Vuejs and tailwindcss. get latest products,full search feature included,watch later products and add to cart "
              demoLink=""
              ghLink=""
              order={3}
            />
          </div> 

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={madot}
              isBlog={false}
              title="Madot Solutions"
              description="The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country, and bringing the wealth of stakeholders and employees to a better standard of living."
              demoLink=""
              ghLink=""
              order={1}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={video_sharing}
              isBlog={false}
              title="Video sharing"
              description="video sharing website made with laravel,Vuejs and tailwindcss. watch videos, create channel, upload videos, like and comment on videos, create playlist, subscribe channels, get notifications.!! "
              demoLink=""
              ghLink=""
              order={2}
            />
          </div>

          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={union}
              isBlog={false}
              title="Union Academy"
              description="Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders."  
              demoLink=""
              ghLink=""
              order={3}
            />
          </div>
          <div className="md:px-6 md:py-12">
            <ProjectCard
              imgPath={social_media}
              isBlog={false}
              title="Social Media Platform"
              description="social media platform project built in laravel websocket vue and tailwindcss. get realtime posts comments and chats,follow friends,create post,chat system integrated,friend requests and suggestions.videos Resources"
              demoLink=""
              ghLink=""
              order={1}
            />
          </div>
        </div>
      </div>
    </div>
    </motion.section>
  );
}

export default Projects;
