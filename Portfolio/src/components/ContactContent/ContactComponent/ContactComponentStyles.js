import styled from "styled-components";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: var(--silverFull5);

  h2 {
    font-size: 2.5em;
    color: var(--violetFull5);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: 100;
    color: var(--greenStyle);
  }
`;

export const ImgPerfil = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 3px solid var(--violetFull1);
  // box-shadow: 1px 1px 5px var(--violetFull5);
  transition: transform 0.3s ease;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;

  a {
    font-size: 1.4em;
    color: var(--silverFull5);
    padding: 10px 15px;
    border-radius: 10px;
    background-color: var(--violetFull1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--violetFull5);
    }
  }

  @media (max-width: 368px) {
    a {
      padding: 6px 8px;
    }
  }
`;

export const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  button {
    font-size: 0.7rem;
    color: var(--silverFull5);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--violetFull1);
    &:hover {
      background-color: var(--violetFull5);
    }
  }
`;
