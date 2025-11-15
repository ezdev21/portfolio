import techStack from "../utils/techstack";

function Techstack() {
  return (
  <div className="grid md:grid-cols-2 gap-15">
    {techStack.map((ts,index)=>(
    <div key={index}>
      <h3 className="text-xl md:text-2xl font-medium pb-5 text-center">
        {ts.title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 pb-3 md:pb-12">
        {ts.skills.map((skill,index)=>(
          <div key={index} className="text-6xl py-5 border-2 border-[#45315a] card align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
            {skill}
          </div>
        ))}
      </div>
    </div>
    ))}
  </div>
  );
}

export default Techstack;
