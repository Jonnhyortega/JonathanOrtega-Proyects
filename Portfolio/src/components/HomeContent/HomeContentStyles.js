import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease forwards;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 1.2s ease forwards;
  }

  section {
    width: 100%;
    background: transparent;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--violetFull5);
  margin-top: 60px;
  margin-bottom: 0;
  animation: ${fadeIn} 0.6s ease forwards;
  transition: color 0.3s ease;

  &:hover {
    color: var(--greenStyle);
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  color: var(--greenStyle);
  margin: 0;
  animation: ${fadeIn} 0.8s ease forwards;
`;

export const StyledLink = styled(Link)`
  background-color: transparent;
  border: 1px solid var(--violetFull5);
  color: var(--silverFull6);
  padding: 12px 20px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  min-width: 150px;

  &:hover {
    background-color: var(--violetFull5);
    transform: translateY(-3px);
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(74, 35, 90, 1) 0%,
    rgba(108, 52, 131, 1) 38%,
    rgba(142, 68, 173, 1) 80%
  );
  animation: ${fadeIn} 1s ease forwards;

  h3 {
    color: var(--greenStyle);
    font-weight: 300;
    animation: ${fadeIn} 1.2s ease forwards;
  }
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 1rem;
  color: #444;

  li {
    background-color: transparent;
    color: var(--violetFull5);
    font-size: 5em;
    padding: 8px 12px;
    border-radius: 20px;
    transition: transform 0.3s ease, color 0.3s ease;
    animation: ${fadeIn} 1.4s ease forwards;
    filter: drop-shadow(-1px 1px 20px grey);
    &:hover {
      transform: scale(1.2);
    }

    &:nth-child(1) {
      color: yellow;
    }
    &:nth-child(2) {
      color: rgb(0, 106, 255);
    }
    &:nth-child(3) {
      color: rgb(255, 153, 0);
    }
    &:nth-child(4) {
      color: rgb(0, 255, 229);
    }
    &:nth-child(5) {
      color: green;
    }
  }
`;
