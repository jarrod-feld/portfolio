import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="white" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      {/* background grid */}
     

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact me
        </h1>
        <p className="text-center text-white-100 md:mt-6 mt-4 text-sm md:text-base max-w-xl">
          Open to mobile engineering internships and entry-level React Native /
          iOS roles (graduating May 2027) · Pomona, CA (Los Angeles area)
        </p>
        <a href="mailto:jdevin814@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
