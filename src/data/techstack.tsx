import { DiGoogleCloudPlatform, DiLaravel, DiReact } from "react-icons/di";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiDjango,
  SiDocker,
  SiExpo,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiNextdotjs,
  SiNuxtdotjs,
  SiVuedotjs,
  SiKubernetes,
  SiFastapi,
} from "react-icons/si";

const techStack = [
  {
    title: "Frontend and Mobile Development",
    skills: [
      <DiReact />,
      <SiNextdotjs />,
      <SiVuedotjs />,
      <SiNuxtdotjs />,
      <SiFlutter />,
      <SiExpo />,
    ],
  },
  {
    title: "Backend Development",
    skills: [
      <FaNodeJs />,
      <SiDjango />,
      <SiFastapi />,
      <DiLaravel />,
      <FaGolang />,
    ],
  },
  {
    title: "Devops and Cloud",
    skills: [
      <SiGithub />,
      <SiDocker />,
      <SiKubernetes />,
      <SiGithubactions />,
      <FaAws />,
      <DiGoogleCloudPlatform />,
      <SiGooglecloud />,
    ],
  },
];

export default techStack;
