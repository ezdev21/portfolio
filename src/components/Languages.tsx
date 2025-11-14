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
    <section id="languages" className="py-16 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Languages</h2>
      <div className="flex flex-col items-center gap-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#0A0416] w-56 py-2 rounded-lg justify-center hover:bg-gray-700 transition"
          >
            <img src={lang.src} width="50px" />
            <div className="text-left">
              <h3 className="text-lg">{lang.name}</h3>
              <p className="text-sm text-gray-400">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
