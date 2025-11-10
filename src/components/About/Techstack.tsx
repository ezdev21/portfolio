import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiLaravel,
  DiDjango,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiPhp,
  SiDart,
  SiTypescript,
  SiCsharp,
  SiFigma,
  SiVuedotjs,
  SiNuxtdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiAlpinedotjs,
  SiSass,
  SiLivewire,
  SiGraphql,
  SiFlutter,
  SiQuasar,
  SiGimp
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
  <div>
    <h1 className="text-white text-[2.3em] font-medium pt-2.5">
      Programming <strong className="text-primary">Language </strong>
    </h1>
    <div className="grid grid-cols-5 pb-12">
      <div className="tech-icons">
        <DiPython />
      </div>
      <div className="tech-icons">
        <CgCPlusPlus />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <DiJava />
      </div>
      <div className="tech-icons">
        <SiPhp/>
      </div>
      <div className="tech-icons">
        <SiDart/>
      </div>
      <div className="tech-icons">
        <SiTypescript/>
      </div>
      <div className="tech-icons">
        <SiCsharp/>
      </div>
      <div className="tech-icons">
        <TbBrandGolang />
      </div>
    </div>

    <h1 className="text-white text-[2.3em] font-medium pt-2.5">
      Frontend <strong className="text-primary">Stack </strong>
    </h1>
    <div className="grid grid-cols-5 pb-12">
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiNextdotjs />
      </div>
      <div className="tech-icons">
        <SiVuedotjs />
      </div>
      <div className="tech-icons">
        <SiNuxtdotjs />
      </div>
      <div className="tech-icons">
        <SiBootstrap />
      </div>
      <div className="tech-icons">
        <SiTailwindcss />
      </div>
      <div className="tech-icons">
        <SiAlpinedotjs />
      </div>
      <div className="tech-icons">
        <SiSass />
      </div>
      <div className="tech-icons">
        <SiFigma />
      </div>
      <div className="tech-icons">
        <SiGimp />
      </div>
    </div> 

    <h1 className="text-white text-[2.3em] font-medium pt-2.5">
      Backend <strong className="text-primary">Stack </strong>
    </h1>
    <div className="grid grid-cols-5 pb-12">
      <div className="tech-icons">
        <DiLaravel />
      </div>
      <div className="tech-icons">
        <SiLivewire />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <DiDjango />
      </div>
      <div className="tech-icons">
        <DiMongodb />
      </div>
      <div className="tech-icons">
        <SiFirebase />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
        <SiGraphql />
      </div>
    </div> 

    <h1 className="text-white text-[2.3em] font-medium pt-2.5">
      Mobile app <strong className="text-primary">Development </strong>
    </h1>
    <div className="grid grid-cols-5 pb-12 mx-auto">
      <div className="tech-icons">
        <SiFlutter />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiQuasar />
      </div>
    </div> 
    </div>
  );
}

export default Techstack;
