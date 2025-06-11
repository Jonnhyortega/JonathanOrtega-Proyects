import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: transparent;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-family: Arial, sans-serif;
  overflow: hidden;
  margin-top: 50px;
  h3 {
    margin-bottom: 15px;
    font-family: var(--inter);
    cursor: pointer;
    padding: 10px 20px;
    width: 150px;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;

    button{
      background-color: transparent;
      color: white;
      border: none;
      position: relative;
      top: 5px;
      transition: .2s all ease-in-out;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
        transition: .2s all ease-in-out;

      }
    }
  }
  

  .social-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    /* *{border:1px solid gold;} */

    small{
      font-family: var(--kanit);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .block-social{
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 1s all;
    overflow: hidden;
  }

  .close-social-buttons{
    height: 1px;
    width: 1px;
    padding: 0rem;
    overflow: hidden;
    transition-duration: 1s ease-in-out;

  }
  .open-social-buttons{
    height: 100px;
    width: 100%;
    overflow: hidden;    
    transition-duration: 1s ease-in-out;

  }

  .social-buttons a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid white;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition-duration: 1s ease-in-out;
  }
  
  .social-buttons a:hover {
    transition: background-color 0.3s ease;
    background: linear-gradient(
    to bottom,
    rgba(74, 35, 90, 1) 0%,
    rgba(108, 52, 131, 1) 38%,
    rgba(142, 68, 173, 1) 80%
  );    color: #fff;
    border: 1px solid white;
  }

  .social-buttons a:hover > *{
    /* filter: drop-shadow(1px 1px 5px white); */
  }

`;
