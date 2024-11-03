import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  CardWrapper,
  CardImage,
  CardButton,
  CardContent,
  CardText,
  CardTitle,
  ButtonsDiv,
  CardLanguages,
} from "./CardStyles";
import { iconMap } from "../../utils/data";
import { useLocation } from "react-router-dom";

export const Card = ({
  cardId,
  cardImage,
  cardTitle,
  cardDescription,
  cardLink,
  cardGitHub,
  cardLanguages,
}) => {
  const location = useLocation()
  const redirectVercel = () => {
    window.open(cardLink);
  };
  const redirectGitHub = () => {
    window.open(cardGitHub);
  };

  return (
    <CardWrapper 
    style={{border: location.pathname == "/" ? "1px solid var(--violetFull5)" : "none"}}
    key={cardId}>
      <CardImage src={cardImage} alt={cardTitle} />
      <CardContent>
        <CardTitle>{cardTitle}</CardTitle>
        <CardText>{cardDescription}</CardText>

        <ButtonsDiv>
          <CardButton onClick={redirectVercel}>
            <FontAwesomeIcon icon={faLink} />
          </CardButton>
          <CardButton onClick={redirectGitHub}>
            <FontAwesomeIcon icon={faGithub} />
          </CardButton>

          <CardLanguages>
              {cardLanguages.map((lang, idx) => {
                const IconComponent = iconMap[lang];
                return <IconComponent key={idx} />;
              })}
          </CardLanguages>
        </ButtonsDiv>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
