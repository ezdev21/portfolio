import homeLogo from "../Assets/home-main.svg";
import Home2 from "../components/Home/Home2";
import Type from "../components/Home/Type";
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
      <div className="relative bg-no-repeat py-[30px] -z-1 bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.678),rgba(12,10,22,0.863)),url(./Assets/home-bg.jpg)] bg-position-[top_center]">
        <div className="text-left text-[whitesmoke] pt-36 pb-8 px-0">
        <div className="flex">
          <div className="w-7/12 pt-20 pl-[70px]">
          <motion.div
            initial={{ translateX: '-100vw', opacity:0 }}
            animate={{ translateX: '0vw', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 25, delay: 1.2}}
          >
              <h1 className="pb-[15px] pl-[50px] text-[2.4em]">
                Hi There!{" "}
                <span className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]" 
                  role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="pl-[45px] text-[2.5em]">
                I'M
                <strong className="text-primary"> EZRA</strong> FIKADU
              </h1>
              <div className="p-[50px] text-left">
                <Type />
              </div>
            </motion.div>  
            </div>
            <div className="md:w-5/12 pb-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-[450px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </motion.section>
  );
}

export default Home;
