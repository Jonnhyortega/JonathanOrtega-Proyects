import React, { useState } from "react";
import {
  ContactSection,
  Overlay,
  OverlayImage,
} from "./ContactContentStyles";
import ContactComponent from "./ContactComponent/ContactComponent";
import Certification from "./Certification/Certification";
import 'animate.css';

export const ContactContent = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src) => {
    setImageSrc(src);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setImageSrc("");
  };

  return (
    <ContactSection>

      <ContactComponent />
      <Certification handleImageClick={handleImageClick} />

      {showOverlay && (
        <Overlay onClick={handleCloseOverlay}>
          <OverlayImage onClick={(e) => {
            e.stopPropagation();
          }} className={`animate__animated ${showOverlay ? "animate__zoomIn" : ""}`} src={imageSrc} alt="Certificado" />
        </Overlay>
      )}
    </ContactSection>
  );
};

export default ContactContent;
