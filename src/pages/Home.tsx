import homeLogo from "@assets/home-main.svg";
import HomeCard from "@components/HomeCard";
import Type from "@components/ui/Type";
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
  tap: { scale: 0.9 },
}

function Home() {
  return (
    <motion.section variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="py-7">
        <div className="text-left text-[whitesmoke] pt-36 pb-8 px-0">
        <div className="md:flex">
          <div className="md:w-7/12 md:pt-20 md:pl-17">
          <motion.div
            initial={{ translateX: '-100vw', opacity:0 }}
            animate={{ translateX: '0vw', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 25, delay: 1.2}}
          >
              <h1 className="pb-4 pl-4 md:pl-12 md:text-4xl text-2xl">
                Hi There!{" "}
                <span className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]" 
                  role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="pl-4 md:pl-11 text-3xl md:text-4xl">
                I'M
                <strong className="text-primary"> EZRA</strong> FIKADU
              </h1>
              <div className="p-4 md:p-12 text-left">
                <Type />
              </div>
            </motion.div>  
            </div>
            <div className="md:w-5/12 pb-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
    </motion.section>
  );
}

export default Home;
