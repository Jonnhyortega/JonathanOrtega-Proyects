import styled from "styled-components";

export const CertificationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  h2 {
    font-size: 2.5em;
    color: var(--violetFull5);
    text-align: center;

    @media (max-width: 368px) {
      font-size: 1.6em;
    }
  }
`;

export const CertificateCard = styled.div`
  background: transparent;
  border: 1px solid var(--violetFull1);
  padding: 15px 20px;
  border-radius: 12px;
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  * {
    margin: 0;
  }
  h3 {
    font-size: 1.2em;
    color: var(--greenStyle);
    font-weight: 400;
@media(max-width: 368px){
    font-size: 1.2em; 
    }
  }

  p {
    font-size: 1em;
    font-weight: 400;
  color: var(--silverFull5);

    @media(max-width: 368px){
    font-size: 0.9em; 
    }
  }

  a {
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: var(--violetFull1);
    border-top-right-radius: 9px;
    border-bottom-left-radius: 9px;
    font-weight: 300;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    &:hover{background: var(--violetFull5);}
    @media (max-width: 568px) {
      padding: 0.3em 0.6em;+
      
    }

    @media (max-width: 360px) {
      padding: 0.2em 0.4em;
      width: 10%;
      text-align: center;
      border-radius: 20px;
      height: 20%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  }

  small {
    color: var(--silverFull5);
    font-weight: 200;

    @media (max-width: 568px) {
      font-size: 0.8em;
    }

    @media (max-width: 360px) {
      font-size: 0.7em;
    }
  }

  @media (max-width: 568px){
  width: auto;
  }
  @media (max-width: 368px){
  width: auto;
  border: none;
  
  
  }
  
`;

export const ButtonStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    border-radius: 2px;
    background-color: var(--violetFull1);
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 568px) {
      padding: 0.3em 0.6em;
    }

    @media (max-width: 360px) {
      padding: 0.2em 0.4em;
    }

    &:after {
      content: "";
      z-index: -1;
      background-color: hsla(0, 0%, 100%, 0.2);
      position: absolute;
      top: -50%;
      bottom: -50%;
      width: 1em;
      transform: translate3d(-825%, 0, 0) rotate(35deg);
    }

    &:hover::after {
      transition: transform 0.45s ease-in-out;
      transform: translate3d(200%, 0, 0) rotate(35deg);
    }
  }
`;
