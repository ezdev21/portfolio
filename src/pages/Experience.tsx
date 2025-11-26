import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experiences from "@/utils/experience";
import clsx from "clsx";

const sectionVariants = {
  initial: { opacity: 0.9, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export default function Experience() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 2000; // adjust max height if needed
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section variants={sectionVariants} exit="exit">
      <div className="py-7 md:px-17">
        <div className="text-left pt-20 md:pt-36 md:pb-8">
          <div>
            <motion.h1
              className="px-2 md:px-5 text-2xl md:text-4xl text-center"
              initial={{ translateY: "-100px" }}
              animate={{ translateY: "0px" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Professional{" "}
              <strong className="text-primary-foreground">Experience</strong>
            </motion.h1>
          </div>

          <div className="relative mt-5 md:mt-12">
            {/* Dynamic timeline line */}
            <div
              className={clsx(
                "absolute left-2 md:left-4 top-0 border-l-2 md:border-l-4 border-gray-300 opacity-50",
              )}
              style={{
                height: `${scrollHeight}px`,
                transition: "height 0.1s ease-out",
              }}
            ></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover="hover"
                whileTap="tap"
                exit="exit"
                className="timeline-item w-full px-4 md:px-12 mb-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0.5 md:left-1.5 -top-3 w-6 h-6 rounded-full bg-secondary"></div>

                <div className="px-3 md:px-5 my-10 md:my-20">
                  <h2 className="font-bold text-2xl md:text-4xl my-2">
                    {experience.company}
                  </h2>
                  <h6 className="my-2">
                    {experience.position} | {experience.date}
                  </h6>
                  <hr className="my-3 border-gray-300 border-t-3 opacity-25" />
                  <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
