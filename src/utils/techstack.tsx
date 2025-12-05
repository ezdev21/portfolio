import {
  DiGoogleCloudPlatform,
  DiJava,
  DiJavascript1,
  DiLaravel,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPhp,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const techStack = [
  {
    title: "Programming Language",
    skills: [
      <DiPython />,
      <SiCplusplus />,
      <DiJavascript1 />,
      <DiJava />,
      <SiPhp />,
      <SiDart />,
      <SiTypescript />,
      <FaGolang />,
    ],
  },
  {
    title: "Frontend and Cross Platform",
    skills: [
      <DiReact />,
      <SiNextdotjs />,
      <SiVuedotjs />,
      <SiNuxtdotjs />,
      <SiBootstrap />,
      <SiTailwindcss />,
      <SiSass />,
      <SiFlutter />,
    ],
  },
  {
    title: "Backend Development",
    skills: [
      <DiLaravel />,
      <FaNodeJs />,
      <SiExpress />,
      <SiNestjs />,
      <SiFirebase />,
      <SiGraphql />,
    ],
  },
  {
    title: "Devops and Cloud",
    skills: [
      <SiGithub />,
      <SiDocker />,
      <SiGithubactions />,
      <SiKubernetes />,
      <SiNginx />,
      <FaAws />,
      <DiGoogleCloudPlatform />,
      <SiGooglecloud />,
    ],
  },
];

export default techStack;
