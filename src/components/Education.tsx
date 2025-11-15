import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      school: "Addis Ababa University",
      year: "",
      details: "Specialized in Computer Stream software development, web technologies, and AI.",
    },
  ];

  return (
    <motion.section
      id="education" 
      initial={{x: -200 }}
      whileInView={{x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
      className="bg-[#1A1126] py-16 text-white rounded-lg"
      >
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="flex flex-col items-center gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-lg transition duration-300 p-5"
          >
            <h3 className="text-md font-semibold">{edu.degree}</h3>
            <p className="text-gray-400 text-sm">{edu.school}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
            <p className="text-gray-300 text-sm">{edu.details}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
