import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillStar,
} from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

function NavBar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [navColour, setNavColour] = useState<Boolean>(false);
  const [activeKey, setActiveKey] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", icon: <AiOutlineHome />, label: "Home" },
    { to: "/about", icon: <AiOutlineUser />, label: "About" },
    { to: "/projects", icon: <AiOutlineFundProjectionScreen />, label: "Projects" },
    { to: "/experience", icon: <RiBuilding2Line />, label: "Experience" },
    { to: "/resume", icon: <CgFileDocument />, label: "Resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 px-12 transition-all duration-300 ${
        navColour
          ? "bg-[#0A0416]/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[#c770f0] font-black text-4xl font-mono"
        >
          &lt;E/&gt;
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white font-bold md:hidden focus:outline-none"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[#0A0416] md:bg-transparent md:flex md:items-center md:space-x-10 text-white text-sm font-medium transition-all py-3`}
        >
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => {
                setIsOpen(false);
                setActiveKey(to);
              }}
              className={`text-xl flex items-center gap-1 px-6 py-3 md:px-0 md:py-0 hover:text-[#c770f0] transition-all ${
                activeKey === to ? "text-[#c770f0]" : ""
              }`}
            >
              <span className="font-black">{icon}</span>
              <span >{label}</span>
            </Link>
          ))}

          {/* GitHub Button */}
          <a
            href="https://github.com/ezdev21/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-block gap-2 mt-2 md:mt-0 mx-6 md:mx-0 bg-[#934cce5e]  hover:bg-[#c770f0] text-white px-5 py-2 rounded-md transition-all"
          >
            <div className="flex items-center">
              <CgGitFork className="text-lg" />
              <AiFillStar className="text-lg" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
