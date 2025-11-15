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
    <div className="bg-black py-3 md:py-7 px-4 md:px-13 bottom-0">
      <div className="flex flex-col md:flex-row md:items-end">
        <div className="order-1 md:w-1/2 md:text-center">
          <div className="text-white md:flex flex-col items-start">
            <h3 className="text-white font-medium text-2xl">Get in touch!</h3>
            <h6 className="text-start text-sm md:text-sm font-light py-2">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</h6>
          </div>
        </div>
        <div className="order-3 md:order-2 text-white md:w-1/4 md:text-center text-sm md:text-sm py-2">
          <h6>Copyright © {year} Ezra F.</h6>
        </div>
        <div className="order-2 md:order-3 md:w-1/4 z-1 text-center">
          <ul className="my-2 flex justify-start md:justify-end">
            <li className="inline-block md:px-4">
              <a
                href="mailto:ezradev21@gmail.com"
                style={{ color: "white", fontSize: '15px' }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail size={25} />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://github.com/ezdev21"
                style={{ color: "white", fontSize: '15px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://www.linkedin.com/in/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://t.me/ezdev21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
            </li>
            <li className="inline-block px-4">
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
