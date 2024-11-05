import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./languageSelectorStyles.css";
import arg from "../../imgs/Banderas/arg.png";
import de from "../../imgs/Banderas/deutsch.png";
import china from "../../imgs/Banderas/china.png";
import eeuu from "../../imgs/Banderas/eeuu.png";
import br from "../../imgs/Banderas/br.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { MenuOverlay } from "../Navbar/NavbarStyles";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, currentLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleMenu}>
        {/* <FontAwesomeIcon className="iconLanguage" icon={faGlobe} /> */}
        {t("Elegir idioma")}
      </button>
      <ul id="LANGUAGE_ONBOARD" className={`example-2 ${isOpen ? "open" : ""}`}>
        <li className="icon-content">
          <a
            aria-label="Argentina"
            data-social="Argentina"
            onClick={() => handleLanguageChange("es")}
            disabled={currentLanguage === "es"}
          >
            <div className="filled"></div>
          <img src={arg} alt="Bandera EE.UU" />
          </a>
          <div className="tooltip">Argentina</div>
        </li>
        <li className="icon-content">
          <a
            aria-label="EEUU"
            data-social="EEUU"
            onClick={() => handleLanguageChange("en")}
            disabled={currentLanguage === "en"}
          >
            <div className="filled"></div>
            <img src={eeuu} alt="Bandera EE.UU" />
          </a>
          <div className="tooltip">EE.UU</div>
        </li>
        <li className="icon-content">
          <a
            onClick={() => handleLanguageChange("pt")}
            disabled={currentLanguage === "pt"}
            aria-label="Brasil"
            data-social="Brasil"
          >
            <div className="filled"></div>
            <img src={br} alt="Bandera Brasil" />
          </a>
          <div className="tooltip">Brasil</div>
        </li>
        <li className="icon-content">
          <a
            onClick={() => handleLanguageChange("zh")}
            disabled={currentLanguage === "zh"}
            aria-label="China"
            data-social="China"
          >
            <div className="filled"></div>

            <img src={china} alt="Bandera de China" />
          </a>
          <div className="tooltip">China</div>
        </li>
        <li className="icon-content">
          <a
            onClick={() => handleLanguageChange("de")}
            disabled={currentLanguage === "de"}
            aria-label="Alemania"
            data-social="Alemania"
          >
            <div className="filled"></div>
            <img src={de} alt="Bandera Alemania" />
          </a>
          <div className="tooltip">Alemania</div>
        </li>
      </ul>
      <MenuOverlay isOpen={isOpen} onClick={toggleMenu} />
    </>
  );
};

export default LanguageSelector;
