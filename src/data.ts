import zucca from "./assets/zucca.jpeg";
import pokemon from "./assets/pokemon.jpeg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string; // Agrega la propiedad link al tipo del proyecto
}

export const projects: Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: pokemon,
    title: "Pokémon Single Page App",
    link: "https://pi-pokemon-main-chi.vercel.app/", // Reemplaza con el enlace correcto
  },
  {
    id: 1, // Cambié el ID para que sea único
    category: "web",
    img: zucca,
    title: "Zucca App",
    link: "https://zucca-smoky.vercel.app/", // Reemplaza con el enlace correcto
  },
];
