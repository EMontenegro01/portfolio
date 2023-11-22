import zucca from "./assets/zucca.jpeg"
import pokemon from "./assets/pokemon.jpeg"

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[]=[
   {
    id: 0,
    category: "uiUx",
    img: pokemon,
    title: "Pokémon Single Page App",
  },
  {
    id: 0,
    category: "web",
    img: zucca,
    title: "Zucca App",
  },
  // {
  //   id: 0,
  //   category: "uiUx",
  //   img: uiUxOne,
  //   title: "UI/UX Web Template",
  // },
  // {
  //   id: 1,
  //   category: "uiUx",
  //   img: uiUxTwo,
  //   title: "UI/UX Tablet Template",
  // },
  // {
  //   id: 2,
  //   category: "uiUx",
  //   img: uiUxThree,
  //   title: "Solar System App Design",
  // },
  // {
  //   id: 3,
  //   category: "web",
  //   img: webOne,
  //   title: "Interior Design Website",
  // },
  // {
  //   id: 4,
  //   category: "web",
  //   img: webTwo,
  //   title: "Agency Landing Page",
  // },
  // {
  //   id: 5,
  //   category: "web",
  //   img: webThree,
  //   title: "Crypto Landing Page",
  // },
];
