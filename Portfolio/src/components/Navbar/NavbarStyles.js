import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 2rem;
  height: 100vh;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  position: fixed;
  top: 0;
  right: -650px;
  z-index: 1099;
  border-radius: 1px;
  // box-shadow: 1px 1p x 15px 2px var(--violetFull1);
  border: 1px solid var(--violetFull1);
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(-100%, -0%)" : "translate(10%, 150%)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  background: rgb(74, 35, 90);
  background: linear-gradient(
    to bottom,
    rgba(74, 35, 90, 1) 0%,
    rgba(108, 52, 131, 1) 38%,
    rgba(142, 68, 173, 1) 80%
  );
`;

export const HamburgerIcon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1100;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--greenStyle);
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MenuOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);
  z-index: 1098;
`;

export const NavLink = styled(Link)`
  color: var(--silverFull5);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Kanit", sans-serif;

  padding: 5px 10px;
  border-radius: 4px;
  transition: color 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--greenStyle);
    // background-color: var(--violetFull5);
  }
`;
