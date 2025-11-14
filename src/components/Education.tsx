
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      school: "Addis Ababa University",
      year: "2023",
      details: "Specialized in Computer Stream software development, web technologies, and AI.",
    }
  ];

  return (
    <section id="education" className="py-16 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="flex flex-col items-center gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#0A0416] mx-3 md:w-2/3 p-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <h3 className="text-md font-semibold">{edu.degree}</h3>
            <p className="text-gray-400 text-sm">{edu.school}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
            <p className="text-gray-300 text-sm">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
