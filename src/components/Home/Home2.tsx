import myImg from "../../Assets/avatar-ezra-curved.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Home2() {
  return (
    <div className="relative py-[70px]">
      <div>
        <div className="flex items-center px-10">
          <div className="md:w-2/3 text-white pt-[100px] pb-5 pl-[60px]">
            <h1 className="text-[2.6em]">
              LET ME <span className="text-primary"> INTRODUCE </span> MYSELF
            </h1>

            <p className="text-left pt-[50px] text-[1.25em]">
              Hey there! 👋 I'm a super versatile software engineer who's all about crafting web and mobile apps that push the boundaries of what's possible.
              <br/>
              <br/>
              I’m a software engineer by profession, driven by a passion for solving real-world problems and creating meaningful
              solutions. With a strong foundation in both front-end and back-end development, I am adept at designing and
              developing full-stack solutions that meet business requirements and exceed user expectations.
            </p>
          </div>
          <div className="md:w-1/3 flex items-center pt- justify-center pt-5">
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
                  className="home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://github.com/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://www.linkedin.com/in/ezdev21/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://t.me/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="inline px-[15px]">
                <a
                  href="https://x.com/ezdev21"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
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
