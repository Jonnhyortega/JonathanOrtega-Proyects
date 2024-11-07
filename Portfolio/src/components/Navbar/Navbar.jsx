import React, { useState } from "react";

import {
  NavButtons,
  NavbarWrapper,
  NavLink,
  MenuOverlay,
} from "./NavbarStyles";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Button from "../Button3D/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <NavButtons>
      <Button text={"Menu"} onClick={toggleMenu}/>
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <MenuOverlay isOpen={isOpen} onClick={toggleMenu} />
      <NavbarWrapper isOpen={isOpen}>
        <p>{t("Menu")}</p>
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
    </NavButtons>
  );
};

export default Navbar;
