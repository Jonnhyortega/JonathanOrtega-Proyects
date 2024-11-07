import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavButtons = styled.div`
  width: 220px;
  margin: 0 auto;
  border-bottom: 1px solid var(--violetFull5);
  display: flex;
  gap: 20px;
  align-items: start;
  justify-content: center;
  position: absolute;
  padding: 1em 0;
`;

export const NavbarWrapper = styled.nav`
  padding: 2rem;
  height: 100vh;
  width: 400px;
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
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(-100%, -0%)" : "translate(10%, 150%)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  background: transparent;

  p {
    color: white;
    font-weight: 300;
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
  font-size: 1.4rem;
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
