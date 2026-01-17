import ecommerce from "@/assets/Projects/ecommerce_optimized.png";
import video_sharing from "@/assets/Projects/video-sharing_optimized.png";
import pool from "@/assets/Projects/pool_optimized.png";
import madot from "@/assets/Projects/madot_optimized.png";
import union from "@/assets/Projects/union_optimized.png";
import originland from "@/assets/Projects/originland_optimized.jfif";
import jestra from "@/assets/Projects/jestra_optimized.png";
import biritu from "@/assets/Projects/biritu_optimized.png";
import haddisArt from "@/assets/Projects/haddisart_optimized.png";

export interface ProjectProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
  skills?: string[];
}

export const projects: ProjectProps[] = [
  {
    imgPath: haddisArt,
    isBlog: false,
    title: "Haddis Art",
    description:
      "Haddis Art is an online art gallery that showcases and sells artwork from various artists. It provides a platform for artists to display their work and for art enthusiasts to discover and purchase unique pieces.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
  {
    imgPath: biritu,
    isBlog: false,
    title: "Biritu",
    description:
      "A Digital Savings Account (Biritu) is an electronic version of a regular Savings Account. With a paperless, quick and secure account opening process",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: [],
  },
  {
    imgPath: pool,
    isBlog: false,
    title: "Pool Taxi",
    description:
      "Pool Taxi is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. It offers transportation services to people, organizations, and institutions.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: [],
  },
  {
    imgPath: jestra,
    isBlog: false,
    title: "Jestra",
    description:
      "Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: [],
  },
  {
    imgPath: ecommerce,
    isBlog: false,
    title: "Ecommerce",
    description:
      "ecommerce web application digital platform that enables users to browse products, add items to a cart, place orders.. It provides sellers with tools to manage products, inventory, orders, and customers, offering a complete online shopping experience.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: [],
  },
  {
    imgPath: madot,
    isBlog: false,
    title: "Madot Solutions",
    description:
      "The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
  {
    imgPath: video_sharing,
    isBlog: false,
    title: "Video sharing",
    description:
      "video sharing and streaming application using React, Zustand, Tailwindcss, Shadcn, Nodejs, Express, Prisma and Postgresql, where people watch videos, like and comment and stream videos by creating channels and uploading videos.",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: [],
  },
  {
    imgPath: union,
    isBlog: false,
    title: "Union Academy",
    description:
      "Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: [],
  },
  {
    imgPath: originland,
    isBlog: false,
    title: "",
    description:
      "Origin land general trading PLC is registered in Ethiopia to engage in Agricultural products export mainly Green Arabica Coffee, Roasted Coffee, Minerals, oil seeds, pulses, spices industrial and chemical products import to Ethiopia.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
];
