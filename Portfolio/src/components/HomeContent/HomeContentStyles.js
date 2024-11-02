import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-alig: center;
  color: #ffffff;
  padding: 100px 0;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #f39c12;
  animation: fadeInDown 1s ease-in-out;
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    width: 50%;
    border: 0;
  }
  @media (max-width: 450px) {
    font-size: 2em;
  }
`;

export const Subtitle = styled.p`
  padding: 1em;
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-in-out;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #f39c12;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
  &:hover {
    background-color: #d17c07;
  }
`;
