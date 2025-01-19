import ASTROFY from "../imgs/ProjectsImgs/Astrofy/logoAstral.png";
import SANITARIOSLUGANO from "../imgs/ProjectsImgs/Sanitarios/SanitariosLugano.jpeg";
import CHULOS_IMG from "../imgs/ProjectsImgs/ChulosDesign/Logo.png";
import WORK_LIST from "../imgs/ProjectsImgs/WorkList/workList.jpeg";
import GOA from "../imgs/ProjectsImgs/Goa/goa.png";
import AstralVision from "../imgs/ProjectsImgs/AstralVision/LogoAstral.jpeg";
import Portfolio from "../imgs/ProjectsImgs/Portfolio/Portfolio.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export const iconMap = {
  html5: FaHtml5,
  "css3-alt": FaCss3Alt,
  js: FaJs,
  bootstrap: FaBootstrap,
  react: FaReact,
  node: FaNode,
  typescript: SiTypescript,
  mongo: DiMongodb,
};

export const projects = [
  {
    id: 1,
    name: "Astrofy",
    img: ASTROFY,
    gitHub: "https://github.com/Jonnhyortega/Astrofy",
    link: "https://astrofy-ashy.vercel.app/",
    description:
      "Proyecto full stack con fines academicos. Implementacion de React Router dom, Redux Toolkit, styled components y libreria axios. Para el backend se utilizo mongoDb, node Js y la libreria express.",
    language: [
      "html5",
      "css3-alt",
      "js",
      "react",
      "typescript",
      "node",
      "mongo",
    ],
  },
  {
    id: 2,
    name: "Sanitarios Lugano",
    img: SANITARIOSLUGANO,
    gitHub: "https://github.com/Jonnhyortega/sanitarioslugano",
    link: "https://sanitarioslugano.com/",
    description:
      "Sitio web institucional para comercio de venta de productos sanitarios y de construccion.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 3,
    name: "Astral Vision",
    img: AstralVision,
    gitHub: "https://github.com/Jonnhyortega/astralvision",
    link: "https://astralvision.vercel.app/",
    description:
      "Sitio web con fines academicos. Implementacion de React Router Dom y styled components.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 1,
    name: "Landing Chulos",
    img: CHULOS_IMG,
    gitHub: "https://github.com/Jonnhyortega/landingchulos",
    link: "https://chulosdesign.com/",
    description:
      "Sitio web para marca de diseño de interiores. Implementacion de React Router Dom y biblioteca de EmailJs para manejar el contacto con el formulario.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 5,
    name: "Portafolios personal",
    img: Portfolio,
    gitHub: "https://github.com/Jonnhyortega/JonathanOrtega-Proyects",
    link: "https:/www.jonnhyortegadev.com/",
    description:
      "Implementacion de React Router dom, libreria i18n para traducción de lenguaje (utilizado con React-Context), styled components.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 6,
    name: "Goa academia de artes marciales",
    img: GOA,
    gitHub: "https://github.com/Jonnhyortega/Landing",
    link: "https://landing-goa.vercel.app/",
    description:
      "Sitio web con fines academicos. Implementacion de React Router Dom.",
    language: ["html5", "css3-alt", "js", "react"],
  },

  {
    id: 7,
    name: "Lista de tareas",
    img: WORK_LIST,
    gitHub: "https://github.com/Jonnhyortega/lista-de-tareas",
    link: "https://lista-de-tareas-topaz.vercel.app/",
    description: "Aplicacion con fines académicos.",
    language: ["html5", "css3-alt", "js"],
  },
];

export default projects;
