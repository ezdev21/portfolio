import { CgCPlusPlus } from "react-icons/cg";
import { DiJava, DiJavascript1, DiLaravel, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiBootstrap, SiDart, SiDocker, SiExpress, SiFigma, SiFirebase, SiFlutter, SiGithub, SiGooglecloud, SiGraphql, SiLinux, SiNestjs, SiNextdotjs, SiNuxtdotjs, SiPhp, SiPostman, SiQuasar, SiSass, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVuedotjs } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

export const programmingLanguages = [
  <DiPython />,
  <CgCPlusPlus />,
  <DiJavascript1 />,
  <DiJava />,
  <SiPhp />,
  <SiDart />,
  <SiTypescript />,
  <TbBrandGolang />
];

export const frontendStack = [
  <DiReact />,
  <SiNextdotjs />,
  <SiVuedotjs />,
  <SiNuxtdotjs />,
  <SiBootstrap />,
  <SiTailwindcss />,
  <SiSass />,
  <SiFigma />
];

export const backendStack = [
  <DiLaravel />,
  <DiNodejs />,
  <SiExpress />,
  <SiNestjs />,
  <SiFirebase />,
  <SiGraphql />
]

export const mobileStack = [
  <DiReact />,
  <SiFlutter />,
  <SiQuasar />
]

export const tools = [
  <SiLinux />,
  <SiVisualstudiocode />,
  <SiGithub />,
  <SiPostman />,
  <SiDocker />,
  <FaAws />,
  <SiGooglecloud />,
]

const techStack = [
  {
    title: 'Programming Language',
    skills: [
      <DiPython />,
      <CgCPlusPlus />,
      <DiJavascript1 />,
      <DiJava />,
      <SiPhp />,
      <SiDart />,
      <SiTypescript />,
      <TbBrandGolang />
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
      <DiNodejs />,
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