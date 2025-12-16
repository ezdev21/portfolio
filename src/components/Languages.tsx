import { motion } from "framer-motion";
import ethiopianFlag from "@/assets/flags/ET.svg";
import americanFlag from "@/assets/flags/US.svg";
// import franceFlag from "@/assets/flags/FR.svg";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";

const Languages = () => {
  const languages = [
    { name: "Amharic", level: "Native/Bilingual", src: ethiopianFlag },
    { name: "English", level: "Fluent", src: americanFlag },
    // { name: "French", level: "Basic", src: franceFlag },
  ];

  return (
    <motion.section
      id="languages"
      className="card py-8 md:py-12 lg:py-16 rounded-2xl flex flex-col"
      initial={{ x: 200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        <PiGlobeHemisphereWestBold className="h-7 w-7 md:h-8 md:w-8 text-[#c770f0]" />
        <span>Languages</span>
      </h2>
      <div className="max-w-xl mx-auto flex flex-col items-stretch gap-4 md:gap-5">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5/5 py-3 px-4 md:py-4 md:px-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <img
              src={lang.src}
              alt={lang.name}
              className="h-8 w-12 rounded-md object-cover ring-1 ring-white/20"
            />
            <div className="text-left flex-1">
              <h3 className="text-sm md:text-base font-semibold">
                {lang.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-400">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Languages;
