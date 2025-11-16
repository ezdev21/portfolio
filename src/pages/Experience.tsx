import { motion } from "framer-motion";
import experiences from "../utils/experience";

const sectionVariants = {
  initial: { opacity: 0.9, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeInOut' }
  },
  exit: { 
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
}

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
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
}

export default function Experience() {

  return (
    <motion.section variants={sectionVariants} exit="exit">
      <div className="py-7 md:px-17">
        <div className="text-left pt-36 pb-8 px-0">
          <div>
            <motion.h1 
              className="px-2 md:px-5 text-2xl md:text-4xl text-center"
              initial={{ translateY: '-100px' }}
              animate={{ translateY: '0px' }}
              transition={{ type: 'spring', stiffness: 300}}
            >
              Professional <strong className="text-primary pb-5">Experience</strong>
            </motion.h1>
          </div>
          <div className="relative mt-12">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 h-full border-l-4 border-gray-300 opacity-50"></div>

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
                className="timeline-item w-full px-12 mb-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 -top-3 w-6 h-6 rounded-full bg-primary"></div>

                <div className="px-5 my-10">
                  <h2 className="font-bold text-2xl md:text-4xl my-2">{experience.company}</h2>
                  <h6 className="my-2">{experience.position} | {experience.date}</h6>
                  <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                  <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">{responsibility}</li>
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
