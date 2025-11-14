import { DiJava, DiJavascript1, DiLaravel, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiBootstrap, SiCplusplus, SiDart, SiDocker, SiExpress, SiFigma, SiFirebase, SiFlutter, SiGithub, SiGooglecloud, SiGraphql, SiLinux, SiNestjs, SiNextdotjs, SiNuxtdotjs, SiPhp, SiPostman, SiQuasar, SiSass, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVuedotjs } from "react-icons/si";

const techStack = [
  {
    title: 'Programming Language',
    skills: [
      <DiPython />,
      <SiCplusplus />,
      <DiJavascript1 />,
      <DiJava />,
      <SiPhp />,
      <SiDart />,
      <SiTypescript />,
      <FaGolang />
    ]
  },
  {
    title: 'Frontend Stack',
    skills: [
      <DiReact />,
      <SiNextdotjs />,
      <SiVuedotjs />,
      <SiNuxtdotjs />,
      <SiBootstrap />,
      <SiTailwindcss />,
      <SiSass />,
      <SiFigma />
    ]
  },
  {
     title: 'Backend Stack',
     skills: [
      <DiLaravel />,
      <FaNodeJs />,
      <SiExpress />,
      <SiNestjs />,
      <SiFirebase />,
      <SiGraphql />
     ]
  },
  {
    title: 'Mobile app Development',
    skills: [
      <DiReact />,
      <SiFlutter />,
      <SiQuasar />
    ]
  },
  {
    title: 'Tools I use',
    skills: [
      <SiLinux />,
      <SiVisualstudiocode />,
      <SiGithub />,
      <SiPostman />,
      <SiDocker />,
      <FaAws />,
      <SiGooglecloud />,
    ]
  }
];

export default techStack