// views
import { About, Contact, Hero, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
  const scrollToContact = () => {
    // Obtener el elemento Contact usando su ID
    const contactElement = document.getElementById("contact");

    if (contactElement) {
      // Hacer scroll al elemento Contact
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
     <Hero scrollToContact={scrollToContact} />
       <About />
       <Projects /> 
      <Contact /> 
     {/*  <Menu />  */}
    </>
  );
}

export default App;
