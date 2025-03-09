import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavButtons = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: end;
  position: fixed;
  z-index: 3000;
  right: 0;
  padding: 1em;
`;

export const NavbarWrapper = styled.nav`
  height: fit-content;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  z-index: 1099;
  border-radius: 1px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  background: transparent;

  @media (max-width: 668px) {
    width: 250px;
  }
`;

export const MenuOverlay = styled.div`
  display: "none";
  justify-content: center;
  align-items: center;
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
  text-align: center;
  font-weight: bold;
  font-family: var(--inter);
  font-size: 2rem;
  transition: color 0.3s ease;
  width: 100%;
  position: relative;
  padding: 25px 10px;
  border-right: 3px solid var(--silverFull5);

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &::before {
    border-radius: 4px;

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(74, 35, 90, 1) 0%,
      rgba(108, 52, 131, 1) 38%,
      rgba(142, 68, 173, 1) 80%
    );
    transition: width 0.5s ease-out;
    z-index: -1;
  }
`;
