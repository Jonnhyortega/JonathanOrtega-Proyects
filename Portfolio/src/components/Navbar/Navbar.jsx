// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faHome,
  faEnvelope,
  faFolder,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavbarWrapper,
  NavLink,
  HamburgerIcon,
  MenuOverlay,
} from "./NavbarStyles";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </HamburgerIcon>
      <MenuOverlay isOpen={isOpen} onClick={toggleMenu} />
      <NavbarWrapper isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faHome} /> */}
          Inicio
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          Contactar
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faFolder} /> */}
          Proyectos
        </NavLink>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
