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
  NavbarWrapper,
  NavLink,
  HamburgerIcon,
  MenuOverlay,
} from "./NavbarStyles";
import { useTranslation } from "react-i18next";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {t}=useTranslation()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon
        onClick={toggleMenu}
      >
        {/* {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )} */}
        Menu
      </HamburgerIcon>
      
      <MenuOverlay isOpen={isOpen} onClick={toggleMenu} />
      <NavbarWrapper isOpen={isOpen}>
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
    </>
  );
};

export default Navbar;
