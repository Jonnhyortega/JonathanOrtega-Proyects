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
import { useTranslation } from "react-i18next";

export const Card = ({
  cardId,
  cardImage,
  cardTitle,
  cardDescription,
  cardLink,
  cardGitHub,
  cardLanguages,
}) => {
  const { t } = useTranslation();

  const redirectVercel = () => {
    window.open(cardLink);
  };
  const redirectGitHub = () => {
    window.open(cardGitHub);
  };

  return (
    <CardWrapper key={cardId}>
      <CardImage src={cardImage} alt={t(`projects.${cardTitle}.name`)} />
      <CardContent>
        <CardTitle>{t(cardTitle)}</CardTitle>
        <CardText>{t(cardDescription)}</CardText>

        <ButtonsDiv>
          {cardTitle !== "Portafolios personal" ? (
            <CardButton onClick={redirectVercel}>
              <FontAwesomeIcon icon={faLink} />
            </CardButton>
          ) : null}
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
