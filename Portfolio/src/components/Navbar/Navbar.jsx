import React, { useState } from "react";
import "animate.css";
import {
  NavButtons,
  NavbarWrapper,
  NavLink,
  MenuOverlay,
} from "./NavbarStyles";
import { useTranslation } from "react-i18next";
import Button from "../Button3D/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.getElementById("menu-overlay").style.display = "flex";
  };
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <NavButtons>
      <Button text={"Menu"} onClick={toggleMenu} />

      <MenuOverlay
        style={{ display: "none" }}
        id="menu-overlay"
        isOpen={isOpen}
        onClick={toggleMenu}
        className={`animate__animated ${
          isOpen ? "animate__rotateIn" : "animate__rotateOut"
        }`}
      >
        <NavbarWrapper>
          <NavLink to="/" onClick={toggleMenu}>
            {t("Inicio")}
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            {t("Contacto")}
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu}>
            {t("Proyectos")}
          </NavLink>
        </NavbarWrapper>
      </MenuOverlay>
    </NavButtons>
  );
};

export default Navbar;
