import React from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import LanguageProvider from "../../context/LanguageContext";
import { useState } from "react";
import { FooterWrapper } from "./FooterStyles.js";
function Footer() {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  return (
    <FooterWrapper>
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </FooterWrapper>
  );
}

export default Footer;
