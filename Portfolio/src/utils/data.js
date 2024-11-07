import ASTROFY from "../imgs/ProjectsImgs/Astrofy/astrofy.png";
import CHULOS_IMG from "../imgs/ProjectsImgs/ChulosDesign/Logo.png";
import WORK_LIST from "../imgs/ProjectsImgs/WorkList/workList.jpeg";
import GOA from "../imgs/ProjectsImgs/Goa/goa.png";
import AstralVision from "../imgs/ProjectsImgs/AstralVision/LogoAstral.jpeg";
import Portfolio from "../imgs/ProjectsImgs/Portfolio/Portfolio.jpg"
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";

export const iconMap = {
  html5: FaHtml5,
  "css3-alt": FaCss3Alt,
  js: FaJs,
  bootstrap: FaBootstrap,
  react: FaReact,
};

export const projects = [
  {
    id: 1,
    name: "Astral Vision",
    img: AstralVision,
    gitHub: "https://github.com/Jonnhyortega/astralvision",
    link: "https://astralvision.vercel.app/",
    description:
      "Sitio web con fines academicos. Implementacion de React Router Dom y styled components.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 2,
    name: "Landing Chulos",
    img: CHULOS_IMG,
    gitHub: "https://github.com/Jonnhyortega/landingchulos",
    link: "https://chulosdesign.com/",
    description:
      "Sitio web para marca de diseño de interiores. Implementacion de React Router Dom y biblioteca de EmailJs para manejar el contacto con el formulario.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 3,
    name: "Astrofy",
    img: ASTROFY,
    gitHub: "https://github.com/Jonnhyortega/Astrofy",
    link: "https://astrofycl.vercel.app/",
    description:
      "Proyecto con fines academicos. Implementacion de React Router dom, Redux Toolkit, styled components y axios fetch.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 4,
    name: "Portfolios",
    img: Portfolio,
    gitHub: "https://github.com/Jonnhyortega/JonathanOrtega-Proyects",
    link: "https:/www.jonnhyortegadev.com/",
    description:
      "Implementacion de React Router dom, libreria i18n para traducción de lenguaje (utilizado con React-Context), styled components.",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    id: 5,
    name: "Goa academia de artes marciales",
    img: GOA,
    gitHub: "https://github.com/Jonnhyortega/Landing",
    link: "https://landing-goa.vercel.app/",
    description:
      "Sitio web con fines academicos. Implementacion de React Router Dom.",
    language: ["html5", "css3-alt", "js", "react"],
  },

  {
    id: 6,
    name: "Lista de tareas",
    img: WORK_LIST,
    gitHub: "https://github.com/Jonnhyortega/lista-de-tareas",
    link: "https://lista-de-tareas-topaz.vercel.app/",
    description: "Aplicacion con fines académicos.",
    language: ["html5", "css3-alt", "js"],
  },
];

export default projects;
