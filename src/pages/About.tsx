import Github from "@components/ui/Github";
import Techstack from "@components/Techstack";
import { motion } from "framer-motion";
import Education from "../components/Education";
import Languages from "../components/Languages";
import SoftSkills from "../components/SoftSkills";
import Testimonial from "../components/Testimonial";
import ContactMe from "../components/ContactMe";
import Hobbies from "../components/Hobbies";
import Lottie from "lottie-react";
import AboutLottie from "@assets/about-lottie.json";
import AboutDetail from "../components/AboutDetail";

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
};

function About() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pb-7">
        <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-10">
          <div className="md:flex mt-20">
            <div className="md:w-7/12 md:flex flex-col pt-3 md:p-10">
              <motion.h1
                initial={{ translateY: "-100px" }}
                animate={{ translateY: "0px" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl md:text-4xl py-5"
              >
                Know Who{" "}
                <strong className="text-primary-foreground">I'M</strong>
              </motion.h1>
              <AboutDetail />
            </div>
            <div className="md:w-5/12 z-1">
              <Lottie animationData={AboutLottie} />
            </div>
          </div>

          <div>
            <Techstack />
          </div>

          <div>
            <Github />
          </div>

          <div className="relative flex flex-col md:flex-row gap-8 overflow-hidden my-20">
            <div className="md:w-1/3">
              <Education />
            </div>
            <div className="md:w-5/12">
              <SoftSkills />
            </div>
            <div className="md:w-1/4">
              <Languages />
            </div>
          </div>

          {/* <div>
          <Hobbies/>
        </div>

        <div>
          <Testimonial/>
        </div> */}

          <div>
            <ContactMe />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
