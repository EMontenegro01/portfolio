import React from "react";
import { LabelInput, Button } from "../components";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

const Contact = () => {
  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget; // Usar currentTarget en lugar de target para el evento de formulario
    const formData = new FormData(form);
    const formAction = "https://formspree.io/f/xdorroyv"; // URL de acción de Formspree

    try {
      await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Agrega cualquier lógica adicional después de enviar el formulario
      console.log("Formulario enviado exitosamente");

    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `url(${contactPageImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Tienes un proyecto en <span className="text-secondary">mente?</span>
            </h2>
            <img src={contactIllustration} alt="" className="max-h-[348px]" />
          </div>
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
           
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <LabelInput labelText="Tu nombre" placeholderText="Nombre" name="name" />
                <LabelInput labelText="Tu email" placeholderText="Email" name="email" />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <LabelInput labelText="Tu mensaje" placeholderText="Mensaje" textarea name="message" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button type="submit" secondary>
                  Enviar Mensaje
                </Button>
              </div>
        
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
    </div>
    </form>
    
  );
};

export default Contact;
