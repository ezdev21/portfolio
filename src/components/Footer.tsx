import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-black opacity-95 py-3 md:py-7 px-4 md:px-13 bottom-0">
      <div className="flex flex-col md:flex-row md:items-end">
        <div className="order-1 md:w-1/2 md:text-center">
          <div className="md:flex flex-col items-start">
            <h3 className="font-medium text-2xl">Get in touch!</h3>
            <h6 className="text-start text-md md:text-md font-normal py-2">
              My inbox is always open. Whether you have a question or just want
              to say hello, I will try my best to get back to you!
            </h6>
          </div>
        </div>
        <div className="order-3 md:order-2 md:w-1/4 text-center text-sm md:text-base py-5 md:py-2">
          <p>Copyright © {new Date().getFullYear()} Ezra F.</p>
        </div>
        <div className="order-2 md:order-3 md:w-1/4 text-center">
          <ul className="my-2 flex justify-start md:justify-end">
            <li className="inline-block px-4">
              <a href="mailto:ezradev21@gmail.com" rel="noopener noreferrer">
                <AiOutlineMail size={25} />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://github.com/ezdev21"
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
