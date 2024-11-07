import React from "react";
import { useTranslation } from "react-i18next";
import "./Button.css"

export const Button = ({ onClick, text }) => {  
  const { t } = useTranslation();
  
  return (
    <button className="ui-btn" onClick={onClick}>
      <span>{t(text)}</span>
    </button>
  );
};

export default Button;
