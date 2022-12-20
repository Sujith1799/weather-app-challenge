import { createGlobalStyle } from "styled-components";
import sunset from "./images/sunset.jpg";

const GlobalStyle = createGlobalStyle`
  html,
  head,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(${sunset}) no-repeat center center/cover;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 25px;
  }

  form {
    margin: 0;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-grow-1 {
    flex-grow: 1;
  }

  img.weather-icon {
    width: 100px;
    height: auto;
  }

  .card {
    background-color:#dfe1e8;
    border-radius: .4rem;
    overflow: hidden;
    box-shadow: 0 0 40px #00000020;
    margin: 10px;
  }

  .temp {
    color: #6870d2;
  }
`;

export default GlobalStyle;
