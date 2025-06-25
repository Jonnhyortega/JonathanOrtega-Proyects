import ASTROFY from "../imgs/ProjectsImgs/Astrofy/logoAstral.png";
import SANITARIOSLUGANO from "../imgs/ProjectsImgs/Sanitarios/SanitariosLugano.jpeg";
import CHULOS_IMG from "../imgs/ProjectsImgs/ChulosDesign/Logo.png";
import HC from "../imgs/ProjectsImgs/Hc/hc.webp";
import GOA from "../imgs/ProjectsImgs/Goa/goa.png";
import AstralVision from "../imgs/ProjectsImgs/AstralVision/LogoAstral.jpeg";
import Portfolio from "../imgs/ProjectsImgs/Portfolio/Portfolio.jpg";

export const imgsTechnologies = {
  html5: "https://img.icons8.com/color/50/html-5--v1.png",
  css3: "https://img.icons8.com/color/50/css3.png",
  js: "https://img.icons8.com/fluency/48/javascript.png",
  react:
    "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png",
  node: "https://img.icons8.com/color/50/nodejs.png",
  typescript:
    "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo.png",
  mongo: "https://img.icons8.com/color/50/mongo-db.png",
  docker: "https://img.icons8.com/color/50/docker.png",
  python: "https://img.icons8.com/color/50/python.png",
  aws: "https://img.icons8.com/color/50/amazon-web-services.png",
};

export const projects = [
  {
    id: 1,
    name: "Portafolios personal",
    img: Portfolio,
    gitHub: "https://github.com/Jonnhyortega/JonathanOrtega-Proyects",
    link: "https:/www.jonnhyortegadev.com/",
    description:
      "project.portafolios",
    language: ["react", "docker", "python", "aws"],
  },
  {
    id: 2,
    name: "Astrofy",
    img: ASTROFY,
    gitHub: "https://github.com/Jonnhyortega/Astrofy",
    link: "https://astrofy-ashy.vercel.app/",
    description:
      "Implementacion de React Router dom, Redux Toolkit, styled components y libreria axios. Para el backend se utilizo mongoDb, node Js y la libreria express.",
    language: ["html5", "css3", "react", "typescript", "node", "mongo"],
  },
  {
    id: 3,
    name: "Sanitarios Lugano",
    img: SANITARIOSLUGANO,
    gitHub: "https://github.com/Jonnhyortega/sanitarioslugano",
    link: "https://sanitarioslugano.com/",
    description:
      "project.sanitarios",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 4,
    name: "Astral Vision",
    img: AstralVision,
    gitHub: "https://github.com/Jonnhyortega/astralvision",
    link: "https://astralvision.vercel.app/",
    description: "Implementacion de React Router Dom y styled components.",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 5,
    name: "Landing Chulos",
    img: CHULOS_IMG,
    gitHub: "https://github.com/Jonnhyortega/landingchulos",
    link: "https://chulosdesign.com/",
    description:
      "project.chulosdesign",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 6,
    name: "Goa academia de artes",
    img: GOA,
    gitHub: "https://github.com/Jonnhyortega/Landing",
    link: "https://landing-goa.vercel.app/",
    description: "Implementacion de React Router Dom.",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 7,
    name: "HC habilitaciones",
    img: HC,
    gitHub: "https://github.com/Jonnhyortega/hc",
    link: "https://www.gestioncomercialhc.com/",
    description: "Sitio web para empresa dedicada a la habilitacion de comercios.",
    language: ["html5", "css3", "js"],
  },
];

export default projects;
