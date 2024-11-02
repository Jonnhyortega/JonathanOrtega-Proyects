import React, { useState } from "react";
import {
  ContactSection,
  Overlay,
  OverlayImage,
} from "./ContactContentStyles";

import ContactComponent from "./ContactComponent/ContactComponent";
import Certification from "./Certification/Certification";
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
          <OverlayImage src={imageSrc} alt="Certificado" />
        </Overlay>
      )}
    </ContactSection>
  );
};

export default ContactContent;
