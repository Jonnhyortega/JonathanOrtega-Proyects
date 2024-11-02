import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import cv from "./CV.pdf";
import styled from "styled-components";
const LinkDownload = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--violetFull1);
  &:hover{
    color:var(--violetFull5);
  }

`;
export const DownloadCVButton = () => {
  return (
    <LinkDownload href={cv} download={cv}>
      Descargar CV {""}
      <FontAwesomeIcon icon={faFile} />
    </LinkDownload>
  );
};

export default DownloadCVButton;
