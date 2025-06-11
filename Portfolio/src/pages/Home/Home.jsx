import React from "react";
import styled from "styled-components";
import HomeContent from "../../components/HomeContent/HomeContent";

const HomeWrapper = styled.div`
  width: 100%;
  background: transparent;
`;
export const Home = () => {


  return (
    <HomeWrapper>
      <HomeContent />
    </HomeWrapper>
  );
};

export default Home;
