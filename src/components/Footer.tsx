import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-[#0A0416] py-[30px] px-10 bottom-0">
      <div className="flex items-end">
        <div className="md:w-1/2 text-center">
          <div className="text-white flex flex-col items-start">
            <h3 className="text-white font-normal">Get in touch</h3>
            <h6 className="text-start">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</h6>
          </div>
        </div>
        <div className="text-white md:w-1/4 text-center">
          <h6>Copyright © {year} Ezra F.</h6>
        </div>
        <div className="md:w-1/4 z-1 text-center">
          <ul className="my-[0.5em] p-0 flex justify-end">
            <li className="inline-block px-[15px]">
              <a
                href="mailto:ezradev21@gmail.com"
                style={{ color: "white", fontSize: '15px' }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail size={25} />
              </a>
            </li>
            <li className="inline-block px-[15px]">
              <a
                href="https://github.com/ezdev21"
                style={{ color: "white", fontSize: '15px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li className="inline-block px-[15px]">
              <a
                href="https://www.linkedin.com/in/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li className="inline-block px-[15px]">
              <a
                href="https://t.me/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
            </li>
            <li className="inline-block px-[15px]">
              <a
                href="https://x.com/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsTwitterX size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
