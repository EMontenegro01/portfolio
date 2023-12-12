// react
import { useState } from "react";

// assets
import souls from "../assets/canva11.png"

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = 'uiUx' | 'web'
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("uiUx")

  const filteredProjects = () =>{
    if(activeCategory === "uiUx"){
      return projects.filter((item)=> item.category === 'uiUx')
    } else{
      return projects.filter((item)=> item.category === 'web')
    }
  }

  return (
      <div 
        id="project" 
        className="min-h-screen relative" 
        style={{
          background:`url(${souls})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
            <h2 
                className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary"
              > 
                Mis proyectos <span className="text-secondary">recientes</span>
              </h2>

              <div className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row">
                <Button 
                secondary={activeCategory==='uiUx' ? true : false} 
                onClick={()=>setActiveCategory("uiUx")}
                >
                  UI/UX
                </Button>

                <Button 
                secondary={activeCategory==='web' ? true : false} 
                onClick={()=>setActiveCategory("web")}
                >
                  DISEÑOS WEB
                </Button>
              </div>

              <div className="flex gap-12 mt-12 flex-wrap justify-center">

                {filteredProjects().map((item)=>(
                  <Card imgSrc={item.img} title={item.title}/>
                ))}

              </div>


        </div>
      </div>

  </div>)
};

export default Projects;
