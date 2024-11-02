import styled from "styled-components";

export const ContactSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--silverFull5);
  padding: 3em 0;

  // * {
  //   border: 1px solid gold;
  // }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2em;
  }

  @media (max-width: 568px) {
    padding: 2em 0;
  }

  @media (max-width: 360px) {
    padding: 1.5em 0;
  }

  .contact-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2.5em;
      color: var(--violetFull1);
      margin-bottom: 10px;
      text-align: center;

      @media (max-width: 568px) {
        font-size: 2em;
      }

      @media (max-width: 360px) {
        font-size: 1.8em;
      }
    }

    p {
      font-size: 1.5em;
      margin: 10px 0;
      font-weight: 200;
      text-align: center;
      @media (max-width: 568px) {
        font-size: 1.2em;
      }

      @media (max-width: 360px) {
        font-size: 1em;
      }
    }

    .icon-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin: 20px 0;

      @media (max-width: 568px) {
        gap: 10px;
      }

      @media (max-width: 360px) {
        gap: 5px;
      }

      a {
        font-size: 1.4em;
        color: var(--silverFull5);
        background-color: var(--violetFull1);
        padding: 10px 15px;
        border-radius: 10px;
        transition: background-color 0.3s ease;

        @media (max-width: 568px) {
          font-size: 1.5em;
          padding: 5px 10px;
        }

        @media (max-width: 360px) {
          font-size: 1.2em;
          padding: 3px 6px;
        }

        &:hover {
          background-color: var(--violetFull5);
        }
      }
    }

    .email-section {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1.5rem;
        margin: 10px 0;
        color: var(--silverFull5);
        @media (max-width: 568px) {
          font-size: 1.2rem;
        }

        @media (max-width: 360px) {
          font-size: 1rem;
        }
      }

      button {
        font-size: 0.7rem;
        color: var(--silverFull5);
        background-color: transparent;
        border: 2px solid var(--violetFull5);
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        @media (max-width: 568px) {
          font-size: 0.6rem;
          padding: 5px 10px;
        }

        @media (max-width: 360px) {
          font-size: 0.5rem;
          padding: 3px 6px;
        }

        &:hover {
          background-color: var(--violetFull5);
        }
      }
    }

    .notification {
      background: rgba(0, 255, 0, 0.8);
      padding: 10px;
      border-radius: 8px;
      color: #000;
      font-weight: bold;
      margin-top: 10px;

      @media (max-width: 568px) {
        padding: 5px;
      }

      @media (max-width: 360px) {
        padding: 3px;
      }
    }
  }

  //contact
  // *******************************///
  //certificacitions

  .certification-section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 568px) {
      padding: 10px;
    }

    @media (max-width: 360px) {
      padding: 5px;
    }

    h2 {
      font-size: 2.5em;
      color: var(--violetFull1);
      text-align: center;

      @media (max-width: 568px) {
        font-size: 1.8em;
      }

      @media (max-width: 360px) {
        font-size: 1.5em;
      }
    }

    .certificate-card {
      background: transparent;
      border: 1px solid var(--violetFull1);
      padding: 15px 20px;
      border-radius: 12px;
      min-width: 400px;
      height: auto;
      margin-bottom: 20px;
      position: relative;
      display: flex;
      flex-direction: column;

      @media (max-width: 568px) {
        padding: 10px 15px;
      }

      @media (max-width: 360px) {
        padding: 5px 10px;
      }

      h3 {
        font-size: 1.2em;
        color: red;
        margin: 0;
        width: auto;

        @media (max-width: 568px) {
          font-size: 1em;
        }

        @media (max-width: 360px) {
          font-size: 0.9em;
        }
      }

      p {
        font-size: 1em;
        width: auto;
        margin: 0;
        @media (max-width: 568px) {
          font-size: 0.9em;
        }

        @media (max-width: 360px) {
          font-size: 0.8em;
        }
      }

      a {
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        background-color: var(--violetFull1);
        border-top-right-radius: 9px;
        border-bottom-left-radius: 9px;
        font-weight: 300;
        overflow: hidden;
        cursor: pointer;
        text-decoration: none;
        position: absolute;
        top: 0;
        right: 0;

        @media (max-width: 568px) {
          padding: 0.3em 0.6em;
        }

        @media (max-width: 360px) {
          padding: 0.2em 0.4em;
        }
      }

      .buttons-full-stack {
        display: flex;
        flex-wrap: nowrap;
        gap: 5px;

        @media (max-width: 568px) {
          gap: 3px;
        }

        @media (max-width: 360px) {
          gap: 2px;
        }
      }

      button {
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        background-color: var(--violetFull1);
        overflow: hidden;
        cursor: pointer;

        @media (max-width: 568px) {
          padding: 0.3em 0.6em;
        }

        @media (max-width: 360px) {
          padding: 0.2em 0.4em;
        }

        &:after {
          content: "";
          z-index: -1;
          background-color: hsla(0, 0%, 100%, 0.2);
          position: absolute;
          top: -50%;
          bottom: -50%;
          width: 1em;
          transform: translate3d(-825%, 0, 0) rotate(35deg);
        }

        &:hover::after {
          transition: transform 0.45s ease-in-out;
          transform: translate3d(200%, 0, 0) rotate(35deg);
        }
      }

      small {
        color: var(--silverFull5);
        font-weight: 100;

        @media (max-width: 568px) {
          font-size: 0.8em;
        }

        @media (max-width: 360px) {
          font-size: 0.7em;
        }
      }
    }
  }
`;

export const ImgPerfil = styled.img`
  width: 200px;
  border-radius: 50%;
  box-shadow: 1px 1px 15px var(--violetFull5);
  transition: transform 0.3s ease;

  @media (max-width: 568px) {
    width: 150px;
  }

  @media (max-width: 360px) {
    width: 100px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 998;
`;

export const OverlayImage = styled.img`
  width: 50%;
  height: 80%;
  border: 5px solid var(--violetFull5);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  @media (max-width: 968px) {
    width: 97%;
    height: 94%;
  }

  @media (max-width: 568px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: 468px) {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 410px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width: 368px) {
    width: 280px;
    height: 200px;
  }
  @media (max-width: 292px) {
    width: 200px;
    height: 100px;
  }
`;
