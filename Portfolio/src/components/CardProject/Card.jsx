import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  CardContent,
  CardText,
  CardTitle,
  CardLanguages,
  ButtonsDiv,
} from "./CardStyles";
import { imgsTechnologies } from "../../utils/data";
import { useTranslation } from "react-i18next";

export const Card = ({ data }) => {
  const { t } = useTranslation();

  return (
    <CardContent key={data.id} $backgroundimage={data.img}>
      <div className="title-and-icons">
        <CardTitle>
          <h2>{t(data.name)}</h2>
        </CardTitle>
        <CardLanguages>
          {data.language.map((language) => (
            <img
              key={language}
              width={40}
              height={40}
              src={imgsTechnologies[language]}
              alt={language}
            />
          ))}
        </CardLanguages>
      </div>
      <div className="description-and-links">
        <CardText>
          <p>{t(data.description) }</p>
        </CardText>
        <ButtonsDiv>
          <a target="_blank" href={data.link}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          <a target="_blank" href={data.gitHub} style={{display: data.gitHub ? "flex" : "none"}}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </ButtonsDiv>
      </div>
    </CardContent>
  );
};

export default Card;
