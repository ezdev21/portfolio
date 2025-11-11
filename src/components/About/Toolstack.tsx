import {
  SiVisualstudiocode,
  SiPostman,
  SiLinux,
  SiGithub,
  SiDocker,
  SiJest,
  SiGooglecloud
} from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 pb-3 md:pb-12">
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiLinux />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiVisualstudiocode />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiPostman />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiDocker />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiGithub />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <FaAws />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiGooglecloud />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <DiNginx />
      </div>
      <div className="text-7xl m-4 p-7 opacity-90 border-2 border-[rgba(200,137,230,0.637)] shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] align-middle text-center rounded-md flex justify-center items-center overflow-hidden transition-all duration-400 ease-linear md:m-2.5 hover:overflow-hidden hover:scale-[1.05] hover:border-2 hover:border-[rgba(197,115,230,0.883)]">
        <SiJest />
      </div>
    </div>
  );
}

export default Toolstack;
