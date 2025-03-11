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

  .btn-menu-container {
    display: flex;
    background-color: red;
    position: absolute;
    height: 100px;
    width: 200px;
    right: 0;
    top: 0;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 80%); */
    z-index: 1099;
    background-color: transparent;
  }

  .linkedin-link {
    position: absolute;
    top: 30px;
    left: 40px;
    padding: 20px 0 20px 36px;
    width: 200px;
    transform: translate3d(0, 0, 0) rotate(45deg);
    background-color: red;
    text-decoration: none;
    color: white;
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    background-color: rgb(91, 44, 211, 0.2);
    transition: 0.3s all;

    &:hover {
      filter: drop-shadow(1px 1px 5px grey);
    }
  }

  .burger-menu {
    font-size: 1.5rem;
    position: absolute;
    right: -50px;
    width: 150px;
    height: 50px;
    text-align: center;
    top: -15px;
    padding-left: 32px;
    border: none;
    transform: translate3d(0, 0, 0) rotate(45deg);
    background-color: var(--violetFull5);
    line-height: 1px;
  }

  .menu-text {
    cursor: pointer;
    transition: 0.2s all;
    transform: rotate(45deg);
    &:hover {
      transform: scale3d(1.1, 1.1, 1.1);
      filter: drop-shadow(1px 1px 5px black);
    }
  }
`;

export const NavbarWrapper = styled.nav`
  height: fit-content;
  width: 400px;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  display: none;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(75px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);
  z-index: 1098;
  overflow-y: auto;
`;

export const NavLink = styled(Link)`
  color: var(--silverFull5);
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-family: var(--inter);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  width: 50%;
  position: relative;
  padding: 20px 8px;
  border-top: 1px solid var(--silverFull5);
  border-left: 1px solid var(--silverFull5);
  border-bottom: 1px solid var(--silverFull5);
  border-right: 3px solid var(--silverFull5);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  @media (max-width: 568px) {
    font-size: 1rem;
    padding: 5px;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }

  &::before {
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
    transition: width 0.3s ease-out;
    z-index: -1;
  }
`;
