import React, { useState, useRef } from "react";
import { LabelInput, Button } from "../components";
import souls from "../assets/canva11.png";
import astro6 from "../assets/astro6.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Utiliza useRef para crear una referencia al elemento Contact
  const contactRef = useRef<HTMLDivElement>(null);

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const newFormData = new FormData(form);

    setFormData({
      name: newFormData.get("name") as string,
      email: newFormData.get("email") as string,
      message: newFormData.get("message") as string,
    });

    const formAction = "https://formspree.io/f/xdorroyv";

    try {
      await fetch(formAction, {
        method: "POST",
        body: newFormData,
        headers: {
          Accept: "application/json",
        },
      });

      setFormSubmitted(true);
      resetForm(); // Limpia los campos del formulario

      console.log("Formulario enviado exitosamente");
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `url(${souls})`,
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
            <img
              src={astro6}
              alt=""
              className="max-h-[300px] max-w-full mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Tu nombre"
                placeholderText="Nombre"
                name="name"
                onChange={(e) => setFormData({ ...formData, name: e.currentTarget.value })}
                value={formData.name}
              />
              <LabelInput
                labelText="Tu email"
                placeholderText="Email"
                name="email"
                onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Tu mensaje"
                placeholderText="Mensaje"
                textarea
                name="message"
                onChange={(e) => setFormData({ ...formData, message: e.currentTarget.value })}
                value={formData.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button type="submit" secondary disabled={!isFormValid}>
                Enviar Mensaje
              </Button>
            </div>
            {formSubmitted && <p className="text-textPrimary text-base sm:text-lg font-bold">Mensaje Enviado!</p>}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
      </div>
    </form>
  );
};

export default Contact;
