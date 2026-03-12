import ecommerce from "@/assets/Projects/ecommerce_optimized.png";
import video_sharing from "@/assets/Projects/video-sharing_optimized.png";
import pool from "@/assets/Projects/pool_logo.jpg";
import madot from "@/assets/Projects/madot_optimized.png";
import union from "@/assets/Projects/union_optimized.png";
import originland from "@/assets/Projects/originland_optimized.jfif";
import jestra from "@/assets/Projects/jestra_optimized.png";
import biritu from "@/assets/Projects/biritu_logo.jpg";

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
    imgPath: video_sharing,
    isBlog: false,
    title: "Video sharing",
    description:
      "video streaming and sharing platform where users can watch, like, and comment on videos, subscribe to channels, and receive personalized recommendations. Users can also create their own channels, upload and organize videos, and engage with a community through comments and interactions. The application supports video streaming, content management, and user-driven engagement features.",
    demoLink: "",
    ghLink: "https://github.com/ezdev21/video-sharing",
    order: 1,
    skills: [],
  },
  {
    imgPath: ecommerce,
    isBlog: false,
    title: "Ecommerce",
    description:
      "An e-commerce web application that allows users to browse products, add items to a cart, and place orders. It provides sellers with tools to manage products, inventory, orders, and customers, delivering a complete online shopping experience.",
    demoLink: "",
    ghLink: "https://github.com/ezdev21/ecommerce",
    order: 2,
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
    order: 3,
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
    order: 1,
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
    imgPath: madot,
    isBlog: false,
    title: "Madot Solutions",
    description:
      "The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country.",
    demoLink: "",
    ghLink: "",
    order: 3,
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
    order: 1,
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
    order: 2,
    skills: [],
  },
];
