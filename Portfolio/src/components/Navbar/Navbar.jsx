import React, { useState, useRef } from "react";
import "animate.css";
import {
  NavButtons,
  NavbarWrapper,
  NavLink,
  MenuOverlay,
} from "./NavbarStyles";
import { useTranslation } from "react-i18next";
import Button from "../Button3D/Button";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HiMenuAlt3 } from "react-icons/hi";
import { useLocation, useParams } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import LanguageProvider from "../../context/LanguageContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOverlayRef = useRef(null);
  const { t } = useTranslation();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const url = location.pathname;
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleNavLinkClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  React.useEffect(() => {
    if (isOpen && menuOverlayRef.current) {
      menuOverlayRef.current.classList.remove("animate__rotateOut");
      menuOverlayRef.current.classList.add("animate__rotateIn");
      menuOverlayRef.current.style.display = "flex";
    } else if (menuOverlayRef.current) {
      menuOverlayRef.current.classList.remove("animate__rotateIn");
      menuOverlayRef.current.classList.add("animate__rotateOut");
      menuOverlayRef.current.style.display = "none";
      //
    }
  }, [isOpen]);

  return (
    <NavButtons>
      <div className="btn-menu-container">
        {url == "/projects" && (
          <a
            className="linkedin-link animate__animated animate__zoomIn"
            href="https://www.linkedin.com/in/jonathan-ortega-a00970191/"
            target="_blank"
          >
            Seguir en Linkedin
          </a>
        )}
        <button className="burger-menu" onClick={toggleMenu}>
          {isOpen ? (
            <img
              className="menu-text"
              width="25"
              height="25"
              src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
              alt="cross-mark-emoji"
            />
          ) : (
            <HiMenuAlt3 className="menu-text" />
          )}
        </button>
      </div>

      <MenuOverlay
        ref={menuOverlayRef}
        id="menu-overlay"
        className="animate__animated"
        
      >
        <NavbarWrapper>
          <NavLink to="/" onClick={(e) => handleNavLinkClick(e)}>
            {t("Inicio")}
          </NavLink>
          <NavLink to="/contact" onClick={(e) => handleNavLinkClick(e)}>
            {t("Contacto")}
          </NavLink>
          <NavLink to="/projects" onClick={(e) => handleNavLinkClick(e)}>
            {t("Proyectos")}
          </NavLink>
        </NavbarWrapper>
        <LanguageSelector />
      </MenuOverlay>
    </NavButtons>
  );
};

export default Navbar;
