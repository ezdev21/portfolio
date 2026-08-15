import {
  DiGoogleCloudPlatform,
  DiJava,
  DiJavascript1,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCplusplus,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPhp,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiKubernetes,
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
    title: "Frontend and Mobile Development",
    skills: [
      <DiReact />,
      <SiNextdotjs />,
      <SiVuedotjs />,
      <SiNuxtdotjs />,
      <SiBootstrap />,
      <SiTailwindcss />,
      <SiSass />,
      <SiFlutter />,
      <SiExpo />,
    ],
  },
  {
    title: "Backend Development",
    skills: [
      <DiLaravel />,
      <FaNodeJs />,
      <SiExpress />,
      <SiNestjs />,
      <SiDjango />,
      <SiFirebase />,
      <SiGraphql />,
      <DiMysql />,
      <DiPostgresql />,
      <DiMongodb />,
    ],
  },
  {
    title: "Devops and Cloud",
    skills: [
      <SiGithub />,
      <SiDocker />,
      <SiKubernetes />,
      <SiGithubactions />,
      <SiNginx />,
      <FaAws />,
      <DiGoogleCloudPlatform />,
      <SiGooglecloud />,
    ],
  },
];

export default techStack;
