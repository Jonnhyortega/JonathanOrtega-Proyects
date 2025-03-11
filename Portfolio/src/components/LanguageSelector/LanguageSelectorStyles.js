import styled from "styled-components";

export const LanguageSelectorContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    color: white;
  }
  p {
    font-size: 1rem;
    font-family: var(--inter);
    color: white;
  }
  select {
    padding: 5px 10px;
    background: transparent;
    outline: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;

    option {
      cursor: pointer;
      color: black;
      background-color: var(--violetFull5);
      border-radius: none;
      &:hover {
        background-color: var(--violetFull4);
      }
    }
  }
`;
