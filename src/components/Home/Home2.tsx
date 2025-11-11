import myImg from "@assets/avatar-ezra-curved.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Home2() {
  return (
    <div className="relative py-4 md:py-[70px]">
      <div>
        <div className="md:flex items-center px-4 md:px-10">
          <div className="md:w-2/3 text-white p-4 md:pt-[100px] md:pl-[60px]">
            <h1 className="text-2xl md:text-[2.6em] pb-5">
              LET ME <span className="text-primary"> INTRODUCE </span> MYSELF
            </h1>

            <p className="text-left md:pt-[50px] text-md md:text-[1.25em]">
              Hey there! 👋 I'm a super versatile software engineer who's all about crafting web and mobile apps that push the boundaries of what's possible.
              <br/>
              <br/>
              I’m a software engineer by profession, driven by a passion for solving real-world problems and creating meaningful
              solutions. With a strong foundation in both front-end and back-end development, I am adept at designing and
              developing full-stack solutions that meet business requirements and exceed user expectations.
            </p>
          </div>
          <div className="md:w-1/3 md:flex items-center justify-center pt-5">
            <Tilt>
              <img src={myImg} width="300px" className="img-fluid" alt="avatar" loading="lazy"/>
            </Tilt>
          </div>
        </div>
        <div>
          <div className="md:w-full text-white text-center pt-[25px]">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-primary">connect </span>with me
            </p>
            <ul className="relative pl-0 pt-[15px] justify-center flex ">
              <li className="inline px-[15px]">
                <a
                  href="mailto:ezradev21@gmail.com"
                  rel="noreferrer"
                  className="relative flex w-10 h-10 text-center text-xl text-[#111010] bg-[#fffffff7] rounded-full justify-center items-center leading-8 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#68187a] before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://github.com/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex w-10 h-10 text-center text-xl text-[#111010] bg-[#fffffff7] rounded-full justify-center items-center leading-8 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#68187a] before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://www.linkedin.com/in/ezdev21/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex w-10 h-10 text-center text-xl text-[#111010] bg-[#fffffff7] rounded-full justify-center items-center leading-8 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#68187a] before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://t.me/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex w-10 h-10 text-center text-xl text-[#111010] bg-[#fffffff7] rounded-full justify-center items-center leading-8 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#68187a] before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://x.com/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex w-10 h-10 text-center text-xl text-[#111010] bg-[#fffffff7] rounded-full justify-center items-center leading-8 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#68187a] before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <BsTwitterX />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home2;
