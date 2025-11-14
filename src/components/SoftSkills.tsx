import { motion } from 'framer-motion'

const softSkills = [
  "Ability to write clean, efficient and documented code",
  "Excellent problem-solving and analytical skills",
  "Effective communication skill and team collaboration",
  "Ability to make progress and adapt new technologies",
];

const SoftSkills = () => {
  return (
    <motion.section
      id="softskills" 
      className="py-16 text-white"
      initial={{y: 200 }}
      whileInView={{y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
      >
       <h2 className="text-3xl font-bold mb-10 text-center">Soft Skills</h2>
       <ul className="list-disc">
        {softSkills.map((skill, index) => (
          <li
            key={index}
            className=""
          >
            <p className="text-md font-semibold">{skill}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SoftSkills;
