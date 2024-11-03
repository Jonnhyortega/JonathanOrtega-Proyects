import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  span {
    font-size: 2.5em;
    font-weight: bold;
    color: var(--greenStyle);
    margin-top: 0px;
    padding: 0;
    text-shadow:
    -1px -1px 0 var(--violetFull5), 
     1px -1px 0 var(--violetFull5), 
    -1px  1px 0 var(--violetFull5), 
     1px  1px 0 var(--violetFull5); 
}
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;
