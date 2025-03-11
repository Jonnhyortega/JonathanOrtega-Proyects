import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelectorStyles.js"; // Asegúrate de que este archivo tenga un export
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSelectorContainer } from "./LanguageSelectorStyles.js";
import { MdLanguage } from "react-icons/md";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <LanguageSelectorContainer htmlFor="selector">
      <div>
        <MdLanguage />
        <p>{t("Idioma")}</p>
      </div>

      <select
        name="selector"
        id="selector"
        value={currentLanguage}
        onChange={handleLanguageChange}
      >
        <option value="es">Argentina</option>
        <option value="pt">Brasil</option>
        <option value="zh">Chino</option>
        <option value="de">Alemán</option>
        <option value="en">Inglés</option>
      </select>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
