import homeLogo from "@assets/home-main.svg";
import HomeCard from "@components/HomeCard";
import Type from "@components/ui/Type";
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import HomeLottie from "@assets/home-lottie.json";

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
  tap: { scale: 0.9 },
}

function Home() {
  return (
    <motion.section variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="pb-7">
        <div className="bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.7),rgba(12,10,22,0.7)),url(./assets/home-bg.jpg)] bg-center text-left mt-20 pb-8 px-0">
        <div className="md:flex md:mx-23">
          <div className="md:w-1/2 flex items-center">
          <motion.div
            initial={{ translateX: '-100vw', opacity:0 }}
            animate={{ translateX: '0vw', opacity: 1 }}
            transition={{ duration: 1, delay: 1.2}}
            className="flex flex-col gap-5"
          >
              <h1 className="text-2xl md:text-4xl">
                Hi There!{" "}
                <span className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]" 
                  role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-3xl md:text-4xl">
                I'M
                <strong className="text-primary"> EZRA</strong> FIKADU
              </h1>
              <div>
                <Type />
              </div>
            </motion.div>  
            </div>
            <div className="md:w-1/2 pb-5 md:pb-0 md:pl-20 flex items-center z-1">
              <Lottie animationData={HomeLottie} className="h-[85vh]"/>
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
    </motion.section>
  );
}

export default Home;
