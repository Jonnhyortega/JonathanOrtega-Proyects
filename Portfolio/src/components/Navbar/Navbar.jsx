import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faHome,
  faEnvelope,
  faFolder,
  faBars,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavButtons,
  NavbarWrapper,
  NavLink,
  HamburgerIcon,
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
  const { i18n } = useTranslation();
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
          {/* <FontAwesomeIcon icon={faHome} /> */}
          {t("Inicio")}
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          {t("Contacto")}
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faFolder} /> */}
          {t("Proyectos")}
        </NavLink>
      </NavbarWrapper>
    </NavButtons>
  );
};

export default Navbar;
