import { motion } from "framer-motion";

const softSkills = [
  "Ability to write clean, efficient and documented code",
  "Excellent problem-solving and analytical skills",
  "Effective communication skill and team collaboration",
  "Strong commitment to continuous learning and professional growth",
];

const SoftSkills = () => {
  return (
    <motion.section
      id="softskills"
      className="card px-8 py-8 md:py-16 rounded-lg"
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-10 text-center">
        Soft Skills
      </h2>
      <ul className="list-disc">
        {softSkills.map((skill, index) => (
          <li key={index} className="">
            <p className="text-sm">{skill}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SoftSkills;
