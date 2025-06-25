import styled from "styled-components";

export const ContactSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // * {
  //   border: 1px solid gold;
  // }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2em;
  }

  @media (max-width: 568px) {
    padding: 2em 0;
  }

  @media (max-width: 360px) {
    padding: 1.5em 0;
  }

`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.06);background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 998;
`;

export const OverlayImage = styled.img`
  width: 50%;
  height: 80%;
  border: 5px solid var(--violetFull5);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  @media (max-width: 968px) {
    width: 97%;
    height: 94%;
  }

  @media (max-width: 568px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: 468px) {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 410px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width: 368px) {
    width: 280px;
    height: 200px;
  }
  @media (max-width: 292px) {
    width: 200px;
    height: 100px;
  }
`;
