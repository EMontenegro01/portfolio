// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import linkedinIcon from "../assets/linkedin-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg";
import githubIcon from "../assets/github-icon.svg"



// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return <div 
  id="about" 
  className="min-h-screen flex items-center justify-center relative"
  style={{
    background:`url(${aboutPageImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  >
   <div 
    className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
   >
      <div className="flex-1 flex flex-col gap-4">
          <h2 
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary"
          > 
            Sobre <span className="text-secondary">Mi</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi dolorem veritatis? Quidem asperiores qui ratione laboriosam similique autem totam possimus eaque! Eveniet, expedita quasi modi eius tenetur placeat ipsum.
          </p>

          <div className="flex items-center justify-center xl:justify-start gap-6">
            <SocialMediaIcon imgSrc={linkedinIcon} title="LinkedIn" />
            <SocialMediaIcon imgSrc={githubIcon} title="Github" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
          </div>       
      </div>

      <div className="flex-1 flex items-center justify-center">
            <img 
              src={aboutIllustration} 
              alt="" 
              className="max-w-full sm:max-w-[401px]" 
              />
            
      </div>
   </div>

   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
  </div>;
};

export default About;
