import myImg from "@/assets/avatar-ezra.png";
import socialLinks from "../data/social_links";
import { home } from "../data/about";

function HomeDetail() {
  return (
    <div className="py-4 md:py-18">
      <div>
        <div className="md:flex items-center px-4 md:px-10">
          <div className="md:w-2/3 p-4 md:pt-25 md:pl-15">
            <h1 className="text-2xl md:text-5xl pb-5">
              LET ME{" "}
              <span className="text-primary-foreground"> INTRODUCE </span>{" "}
              MYSELF
            </h1>

            {home.map((paragraph, index) => (
              <p key={index} className="text-left md:pt-12 text-md md:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="md:w-1/3 md:flex items-center justify-center pt-5 md:mr-10">
            <div className="w-85 h-85 relative flex justify-center items-center">
              <div className="absolute top-15">
                <div className="bg-card rounded-full border-10 border-secondary w-75 h-75">
                  <img
                    src={myImg}
                    className="w-full h-full rounded-full grayscale-50 hover:grayscale-0 transition duration-500"
                    alt="avatar"
                  />
                </div>
                <div className="top-4 right-4 absolute bg-secondary w-16 h-16 rounded-full"></div>
                <div className="-left-4 top-[50%] absolute bg-secondary w-12 h-12 rounded-full"></div>
                <div className="bottom-8 right-8 absolute bg-secondary w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-full text-center pt-6">
            <h1 className="text-3xl pt-15 pb-5">FIND ME ON</h1>
            <p className="pb-5 text-xl">
              Feel free to{" "}
              <span className="text-primary-foreground">connect </span>with me
            </p>
            <ul className="relative pt-4 flex justify-center space-x-7 md:space-x-10">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex w-10 h-10 text-center text-xl text-secondary bg-white rounded-full justify-center items-center leading-8 hover:text-primary-foreground hover:shadow-[0_0_5px_#87209e] hover:text-shadow-[0_0_2px_#87209e] transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:card before:transition-transform before:duration-500 before:scale-90 before:-z-10 hover:before:scale-[1.1] hover:before:shadow-[0_0_15px_#801f95]"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetail;
