import { motion } from "framer-motion";
import { PiGraduationCapBold } from "react-icons/pi";
import { FaSchool, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      school: "Addis Ababa University",
      year: "2022",
      details:
        "Specialized in Computer Stream software development, web technologies, and AI.",
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
      className="card py-8 md:py-12 lg:py-16 rounded-2xl"
    >
      <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        <PiGraduationCapBold className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
        <span>Education</span>
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl px-5 py-4 md:px-6 md:py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 mb-4"
          >
            <div className="flex flex-col items-stretch gap-3">
              <div className="flex items-center rounded-lg p-3 border border-white/10">
                <PiGraduationCapBold className="w-24 h-24 text-secondary mx-3" />
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {edu.degree}
                </h3>
              </div>
              <div className="flex items-center rounded-lg p-3 border border-white/10">
                <FaSchool className="w-8 h-8 text-secondary mx-3" />
                <div>
                  <h3>{edu.school}</h3>
                  <span>{edu.year}</span>
                </div>
              </div>
              <div className="flex items-center rounded-lg p-3 border border-white/10">
                <FaBookOpen className="w-24 h-24 text-secondary mx-3" />
                <p>{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
