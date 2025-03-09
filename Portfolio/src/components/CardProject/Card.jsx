import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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

export const Card = ({ data }) => {
  const { t } = useTranslation();
  const colorIcon = (string) => {
    return string == "html5"
      ? "orange"
      : string == "css3-alt"
      ? "rgb(0, 119, 255)"
      : string == "js"
      ? "yellow"
      : string == "react"
      ? "teal"
      : string == "typescript"
      ? "rgb(0, 119, 255)"
      : string == "node"
      ? "rgb(0, 125, 10)"
      : string == "mongo"
      ? "rgb(6, 90, 0)"
      : "red";
  };
  return (
    <CardWrapper key={data.id}>
      {/* <img src={data.img} alt={t(`projects.${data.name}.name`)} /> */}
      <div>
        <div>
          <h2>{t(data.name)}</h2>
          <CardLanguages>
            {data.language.map((lang, idx) => {
              const IconComponent = iconMap[lang];
              return (
                <IconComponent key={idx} style={{ color: colorIcon(lang) }} />
              );
            })}
          </CardLanguages>
        </div>

        <p>{t(data.description)}</p>

        <div>
          {data.name !== "Portafolios personal" ? (
            <a target="_blank" href={data.link}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : null}
          <a target="_blank" href={data.gitHub}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
