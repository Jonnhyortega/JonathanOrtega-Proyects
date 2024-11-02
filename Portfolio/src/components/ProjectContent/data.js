import STORE_1 from "../../imgs/astrofy.jpeg";
import STORE_2 from "../../imgs/chulos-terrazos.png";
import WORK_LIST from "../../imgs/to-do-list.jpg";
import LANDING from "../../imgs/logo-goa-mma.png";

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
    name: "Astrofy",
    img: STORE_1,
    link: "https://astrofycl.vercel.app/",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    name: "Lista de tareas",
    img: WORK_LIST,
    link: "https://lista-de-tareas-topaz.vercel.app/",
    language: ["html5", "css3-alt", "js"],
  },
  {
    name: "Landing Chulos",
    img: STORE_2,
    link: "https://chulitos.vercel.app/ ",
    language: ["html5", "css3-alt", "js", "react"],
  },
  {
    name: "Landing Goa",
    img: LANDING,
    link: "https://landing-goa.vercel.app/",
    language: ["html5", "css3-alt", "js", "react"],
  },
];
