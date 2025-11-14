import Github from "@components/Github";
import Techstack from "@components/Techstack";
import Aboutcard from "@components/AboutCard";
import laptopImg from "@assets/about.png";
import Toolstack from "@components/Toolstack";
import { motion } from 'framer-motion'

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
      <div className="px-4 md:px-20">
        <div className="p-2.5 md:flex items-start">
          <div className="md:w-7/12 pt-3 md:pt-7 md:pb-12">
            <motion.h1
              initial={{ translateY: '-100px' }}
              animate={{ translateY: '0px' }}
              transition={{ type: 'spring', stiffness: 300}}
              className="text-2xl md:text-4xl pt-2 pb-5"
            >
              Know Who <strong className="text-primary">I'M</strong>
            </motion.h1>
            <Aboutcard />
          </div>
          <div className="md:w-5/12 py-2 md:py-8 md:pt-[120px] md:pb-[50px]"
          >
            <img src={laptopImg} alt="about" className="img-fluid" loading="lazy"/>
          </div>
        </div>

        <Techstack />

        <h1 className="text-white text-2xl md:text-4xl font-medium pt-2.5 text-center">
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
