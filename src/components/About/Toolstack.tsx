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
    <div className="grid grid-cols-5 pb-12 mx-auto">
      <div className="tech-icons">
        <SiLinux />
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons">
        <SiPostman />
      </div>
      <div className="tech-icons">
        <SiDocker />
      </div>
      <div className="tech-icons">
        <SiGithub />
      </div>
      <div className="tech-icons">
        <FaAws />
      </div>
      <div className="tech-icons">
        <SiGooglecloud />
      </div>
      <div className="tech-icons">
        <DiNginx />
      </div>
      <div className="tech-icons">
        <SiJest />
      </div>
    </div>
  );
}

export default Toolstack;
