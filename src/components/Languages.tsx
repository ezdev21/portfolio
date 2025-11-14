import { motion } from 'framer-motion'
import ethiopianFlag from "@assets/flags/ET.svg";
import americanFlag from "@assets/flags/US.svg";
import franceFlag from "@assets/flags/FR.svg";

const Languages = () => {
  const languages = [
    { name: "Amharic", level: "Native", src: ethiopianFlag },
    { name: "English", level: "Fluent", src: americanFlag },
    { name: "French", level: "Basic", src: franceFlag },
  ];

  return (
    <motion.section 
      id="languages"
      className="py-16 text-white"
      initial={{x: 200 }}
      whileInView={{x: 0}}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
      >
      <h2 className="text-3xl font-bold mb-10 text-center">Languages</h2>
      <div className="flex flex-col items-center gap-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex gap-4 bg-[#0A0416] py-1 px-5 rounded-lg justify-start hover:bg-gray-700 transition"
          >
            <img src={lang.src} width="40px"/>
            <div className="text-left">
              <h3 className="text-lg">{lang.name}</h3>
              <p className="text-sm text-gray-400">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Languages;
