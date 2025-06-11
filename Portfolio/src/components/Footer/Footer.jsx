import React, {useState} from "react";
import { FooterWrapper } from "./FooterStyles.js";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import 'animate.css';

function Footer() {
  const [openSocial, setOpenSocial] = useState(false);
  const { t } = useTranslation();

  const handleOpenSocial = () => {  
    setOpenSocial(!openSocial);
  }

  return (
    <FooterWrapper>
      <footer>
        <h3>{t("Contacto")} 
          <button onClick={handleOpenSocial} >
            <img width="25" height="25" src="https://img.icons8.com/color/50/down-squared.png" alt="down-squared"/>          
          </button>
        </h3>
        <div className={`social-buttons`}>
          <div className={`block-social ${openSocial ? "open-social-buttons" : "close-social-buttons"}`}>
            <a
            style={{display: openSocial ? "flex" : "none"}}
            href="https://wa.me/1122684234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="animate__animated animate__backInDown"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            style={{display: openSocial ? "flex" : "none"}}
            href="https://www.linkedin.com/in/jonathan-ortega-a00970191/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="animate__animated animate__backInUp"
          >
            <FaLinkedin size={24} />
            
          </a>
          <a
            style={{display: openSocial ? "flex" : "none"}}
            href="https://www.instagram.com/jonnhyortega"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="animate__animated animate__backInDown"

          >
            <FaInstagram size={24} />
            
          </a>
          </div>
          <small 
          style={{display: openSocial ? "flex" : "none"}} 
          className="animate__animated animate__rollIn">
            Gracias por su visita
          </small>
        </div>
      </footer>
    </FooterWrapper>
  );
}

export default Footer;
