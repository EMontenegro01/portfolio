// assets
import homePageImg from "../assets/home-page.svg";
import souls from "../assets/canva11.png"
import homePageIllustation from "../assets/hero-illustration.svg";
import astro from "../assets/astro2.png"
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
const pdfUrl = "/cv.pdf";


interface HeroProps {
  scrollToContact: () => void;
}
const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  const handleDownloadCV = async () => {
    try { 
      // Realizar una solicitud de red para obtener el archivo PDF
      console.log('Ruta del PDF:', pdfUrl);

      const response = await fetch(pdfUrl);
  
      // Verificar si la solicitud fue exitosa
      if (!response.ok) {
        console.error(`Error al descargar el archivo. Código de estado: ${response.status}`);
        return;
      }
  
      // Convertir el archivo PDF en un objeto Blob
      const blob = await response.blob();
  
      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ElianMontenegro_CV.pdf";  // Nombre del archivo para la descarga
      document.body.appendChild(a);
      a.click();
  
      // Limpiar el enlace y liberar recursos
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  
      console.log('Descarga del CV exitosa');
    } catch (error) {
      console.error('Error al descargar el CV', error);
    }
  };
  
  return <div id="home" className="min-h-screen flex items-center justify-center relative"
  style={{
    background:`url(${souls})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  >
    <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
    
    >
      <div className="w-full xl:w-fit">
        <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
          ELIÁN MONTENEGRO
          <br />
          <span className="text-secondary">
            <Typewriter 
            words={["FRONTEND DEV", "BACKEND DEV", "FULLSTACK DEV"]}
            cursor cursorStyle="_"
            typeSpeed={250}
            deleteSpeed={150}
            loop
            />

          </span>
        </h1>
        <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-center xl:justify-start">
            <Button secondary onClick={scrollToContact}>Trabajemos Juntos!</Button>
            <Button
              icon={downloadIcon}
              onClick={handleDownloadCV}
            >
              Descargar CV
            </Button>

        </div>
      </div>

      <img 
        src={astro} 
        alt="" 
        className="max-w-full sm:max-w-[701px]"
        />
    </div>
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
  </div>;
};

export default Hero;
