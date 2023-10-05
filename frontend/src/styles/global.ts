import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
    border: none;
  }

  body {
    background: #ffff;
    width: 100%;
    height: 100vh;
    color: black;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: #afafaf;
      opacity: 0.5;
      left: 0;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    color: #032958;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #97989C;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: end;

    button {
      width: 122px;
      height: 47px;
      background: #032958;
      border-radius: 8px;
      color: white;
      transition: all 0.5s;

      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }


  .container {
    margin: 0 auto;
    padding: 50px 100px;
    height: 100%;
    width: 100%;

    @media (max-width: 414px) {
        padding: 50px;
        width: 90%;
        height: auto;
        background-color: white;
        border-radius: 25px;
        z-index: 9999;
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);
    }
  }


`;
