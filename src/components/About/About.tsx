import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { delay, motion } from 'framer-motion'

const variants = {
  initial: {opacity: 0},
  animate: {
    opacity: 1,
    transition:{
      ease: 'easeInOut'
    }
  },
  exit: { 
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
}

function About() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
    <div className="relative pt-[100px] pb-[30px] text-white bg-linear-to-bl from-[rgba(17,16,16,0.582)] to-[rgba(12,8,24,0.904)]">
      <div className="px-20">
        <div className="p-2.5 flex items-start">
          <div className="md:w-7/12 pt-[30px] pb-[50px]">
            <motion.h1
              initial={{ translateY: '-100px' }}
              animate={{ translateY: '0px' }}
              transition={{ type: 'spring', stiffness: 300}}
              style={{ fontSize: "2.1em", paddingBottom: "10px" }}
            >
              Know Who <strong className="purple">I'M</strong>
            </motion.h1>
            <Aboutcard />
          </div>
          <div className="md:w-5/12 pt-[120px] pb-[50px]"
          >
            <img src={laptopImg} alt="about" className="img-fluid" loading="lazy"/>
          </div>
        </div>

        <Techstack />

        <h1 className="text-white text-[2.3em] font-medium pt-2.5">
          <strong className="text-primary">Tools</strong> I use
        </h1>
        
        <Toolstack />
        
        <Github />
      </div>
    </div>
    </motion.div>
  );
}

export default About;
