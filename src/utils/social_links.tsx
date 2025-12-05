import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:ezradev21@gmail.com",
    icon: <AiFillMail />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ezdev21",
    icon: <AiFillGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ezdev21/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Telegram",
    url: "https://t.me/ezdev21",
    icon: <FaTelegram />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/251921619659",
    icon: <FaWhatsapp />,
  },
  {
    name: "X",
    url: "",
    icon: <BsTwitterX />,
  },
  // {
  //   name: "Discord",
  //   url: "",
  //   icon: "discord-icon"
  // },
  // {
  //   name: "Reddit",
  //   url: "",
  //   icon: "reddit-icon"
  // },
  // {
  //   name: "TikTok",
  //   url: "",
  //   icon: "tiktok-icon"
  // },
  // {
  //   name: "YouTube",
  //   url: "",
  //   icon: "youtube-icon"
  // },
  // {
  //   name: "Instagram",
  //   url: "",
  //   icon: "instagram-icon"
  // },
  // {
  //   name: "Facebook",
  //   url: "",
  //   icon: "facebook-icon"
  // },
  // {
  //   name: "Phone",
  //   url: "",
  //   icon: "phone-icon"
  // },
  // {
  //   name: "Upwork",
  //   url: "",
  //   icon: "upwork-icon"
  // },
];

export default socialLinks;
