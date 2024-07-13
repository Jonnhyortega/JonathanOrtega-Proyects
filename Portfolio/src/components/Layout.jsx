import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.15);
`;

const NavLink = styled(Link)`
  color: #f39c12;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #f39c12;
  }
`;

export function Layout() {
  return (
    <>
      <Navbar>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink to="/projects">
          <FontAwesomeIcon icon={faFolder} />
        </NavLink>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Layout;
