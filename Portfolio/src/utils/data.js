import ASTROFY from "../imgs/ProjectsImgs/Astrofy/logoAstral.png";
import SANITARIOSLUGANO from "../imgs/ProjectsImgs/Sanitarios/SanitariosLugano.jpeg";
import CHULOS_IMG from "../imgs/ProjectsImgs/ChulosDesign/Logo.png";
import HC from "../imgs/ProjectsImgs/Hc/hc.webp";
import GOA from "../imgs/ProjectsImgs/Goa/goa.png";
import AstralVision from "../imgs/ProjectsImgs/AstralVision/LogoAstral.jpeg";
import Portfolio from "../imgs/ProjectsImgs/Portfolio/Portfolio.jpg";
import clipgenLogo from "../imgs/ProjectsImgs/Clipgen/clipgenlogo.webp";
import CMlogo from "../imgs/ProjectsImgs/CasaMolinas/logoCM.jpg";
import CSlogo from "../imgs/ProjectsImgs/CreatinaSticks/CSlogo.jpg";

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
  next: "https://cdn.jsdelivr.net/npm/simple-icons@15.12.0/icons/nextdotjs.svg"
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
    name: "HC habilitaciones",
    img: HC,
    gitHub: "https://github.com/Jonnhyortega/hc",
    link: "https://www.gestioncomercialhc.com/",
    description: "Sitio web para empresa dedicada a la habilitacion de comercios.",
    language: ["html5", "css3", "js", "next"],
  },
  {
    id: 3,
    name: "Astral Vision",
    img: AstralVision,
    gitHub: "https://github.com/Jonnhyortega/astralvision",
    link: "https://astralvision.vercel.app/",
    description: "project.astralvision",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 4,
    name: "Landing Chulos",
    img: CHULOS_IMG,
    gitHub: "https://github.com/Jonnhyortega/landingchulos",
    link: "https://chulosdesign.com/",
    description:
      "project.chulosdesign",
    language: ["html5", "css3", "js", "react"],
  }, 
  {
    id: 5,
    name: "Sanitarios Lugano",
    img: SANITARIOSLUGANO,
    gitHub: "https://github.com/Jonnhyortega/sanitarioslugano",
    link: "https://sanitarioslugano.com/",
    description:
      "project.sanitarios",
    language: ["html5", "css3", "js", "react"],
  },
  {
    id: 6,
    name: "Wuweiclip",
    img: clipgenLogo,
    gitHub: "https://github.com/Jonnhyortega/clipgen-frontend/blob/main/manage.py",
    link: "https://wuweiclip.com/",
    description: "project.wuweiclip",
    language: ["html5", "css3", "js", "python"],
  },
  {
    id: 7,
    name: "Casa Molinas",
    img: CMlogo,
    link: "https://casamolinas.mitiendanube.com/",
    description: "project.casamolinas",
    language: ["html5", "css3", "js"],
  },
  {
    id: 8,
    name: "Creatina Sticks",
    img: CSlogo,
    link: "https://creatinasticks.mitiendanube.com/",
    description: "project.creatinasticks",
    language: ["html5", "css3", "js"],
  },
  {
    id: 9,
    name: "Astrofy",
    img: ASTROFY,
    gitHub: "https://github.com/Jonnhyortega/Astrofy",
    link: "https://astrofy-ashy.vercel.app/",
    description:
      "Implementacion de React Router dom, Redux Toolkit, styled components y libreria axios. Para el backend se utilizo mongoDb, node Js y la libreria express.",
    language: ["html5", "css3", "react", "typescript", "node", "mongo"],
  },
  {
    id: 10,
    name: "Goa academia de artes",
    img: GOA,
    gitHub: "https://github.com/Jonnhyortega/Landing",
    link: "https://landing-goa.vercel.app/",
    description: "project.goa",
    language: ["html5", "css3", "js", "react"],
  },
];

export default projects;
