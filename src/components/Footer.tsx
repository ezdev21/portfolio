import socialLinks from "../utils/social_links";

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
            {socialLinks.map((link) => (
              <li className="inline-block px-3 text-2xl" key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition duration-300"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
