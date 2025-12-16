import { motion } from "framer-motion";
import { RiUserHeartLine } from "react-icons/ri";

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
      className="card px-6 md:px-8 py-8 md:py-12 lg:py-16 rounded-2xl"
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        <RiUserHeartLine className="h-7 w-7 md:h-8 md:w-8 text-[#c770f0]" />
        <span>Soft Skills</span>
      </h2>
      <ul className="space-y-4 md:space-y-5 max-w-2xl mx-auto my-auto flex flex-col items-center">
        {softSkills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5/5 px-4 py-3 md:px-5 md:py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_12px_rgba(199,112,240,0.8)]" />
            <p className="text-sm md:text-base leading-relaxed">{skill}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SoftSkills;
