import React from "react";
import ContactContent from "../../components/ContactContent/ContactContent";
import styled from "styled-components";
const ContactWrapper = styled.div`
  width: 100%;
`;
export const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContent />
    </ContactWrapper>
  );
};
export default Contact