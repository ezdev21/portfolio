import { motion } from "framer-motion";
import ethiopianFlag from "@/assets/flags/ET.svg";
import americanFlag from "@/assets/flags/US.svg";
// import franceFlag from "@/assets/flags/FR.svg";

const Languages = () => {
  const languages = [
    { name: "Amharic", level: "Native/Bilingual", src: ethiopianFlag },
    { name: "English", level: "Fluent", src: americanFlag },
    // { name: "French", level: "Basic", src: franceFlag },
  ];

  return (
    <motion.section
      id="languages"
      className="card py-8 md:py-16 rounded-lg flex flex-col"
      initial={{ x: 200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-10 mx-15">
        Languages
      </h2>
      <div className="flex flex-col items-start gap-4 mx-10">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex gap-4 py-1 px-5 rounded-lg justify-start"
          >
            <img src={lang.src} width="40px" />
            <div className="text-left">
              <h3 className="text-md">{lang.name}</h3>
              <p className="text-xs text-gray-400">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Languages;
