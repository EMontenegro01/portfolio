// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import linkedinIcon from "../assets/linkedin-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg";
import githubIcon from "../assets/github-icon.svg"
import souls from "../assets/canva11.png"
import astro4 from "../assets/astro4.png"

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  // Define las URLs de tus perfiles de redes sociales
  const linkedinUrl = "https://www.linkedin.com/in/elian-gonzalo-montenegro/";
  const githubUrl = "https://github.com/EMontenegro01";
  const instagramUrl = "https://www.instagram.com/elian.monte/";

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${souls})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            Sobre <span className="text-secondary">Mi</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
          Desarrollador FullStack Junior con experiencia en tecnologías web actuales. Enfocado en crear aplicaciones atractivas y funcionales que mejoren la experiencia del usuario y aborden desafíos empresariales. Comprometido con el aprendizaje continuo y al tanto de las últimas tendencias tecnológicas. Apasionado por contribuir a proyectos innovadores y con impacto positivo. Habilidades: JavaScript, React, Redux, NodeJS, Express, HTML, CSS, SQL. Listo para aportar valor y adaptarse a un entorno tecnológico en constante evolución.
          </p>

          <div className="flex items-center justify-center xl:justify-start gap-6">
            {/* Enlace a LinkedIn */}
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon imgSrc={linkedinIcon} title="LinkedIn" />
            </a>
            
            {/* Enlace a GitHub */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon imgSrc={githubIcon} title="Github" />
            </a>

            {/* Enlace a Instagram */}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img src={astro4} alt="" className="max-w-full sm:max-w-[401px]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
    </div>
  );
};

export default About;