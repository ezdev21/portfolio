import HomeCard from "@components/HomeDetail";
import Type from "@components/ui/Type";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import HomeLottie from "@assets/home-lottie.json";
import { BackgroundBeamsWithCollision } from "../components/ui/BackgroundBeamWithCollision";
const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
  tap: { scale: 0.9 },
};

function Home() {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackgroundBeamsWithCollision className="opacity-75 fixed bg-transparent h-[87vh] w-full">
        <div></div>
      </BackgroundBeamsWithCollision>
      <div className="pb-7">
        <div className="bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.8),rgba(12,10,22,0.8)),url(./assets/home-bg.jpg)] bg-center text-left mt-20 pb-8 px-0">
          <div className="md:flex md:mx-23">
            <div className="md:w-1/2 flex items-center max-md:mx-5 max-md:p-5">
              <motion.div
                initial={{ translateX: "-100vw", opacity: 0 }}
                animate={{ translateX: "0vw", opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="flex flex-col md:gap-10"
              >
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Hi There!
                  <span
                    className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]"
                    role="img"
                    aria-labelledby="wave"
                  >
                    👋🏻
                  </span>
                </h1>
                <h1 className="text-3xl md:text-5xl py-5">
                  I'M
                  <strong className="text-primary-foreground">
                    {" "}
                    EZRA
                  </strong>{" "}
                  FIKADU
                </h1>
                <div>
                  <Type />
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 z-1 ">
              <Lottie animationData={HomeLottie} />
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
    </motion.section>
  );
}

export default Home;
