import { createGlobalStyle } from "styled-components";

export const RootStyles = createGlobalStyle`
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font: 18px/100% "Quicksand", sans-serif;
    font-weight: 100;
    overflow-x: hidden;
  }

  mark {
    background: none;
    font-family: "Calibri";
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  q {
    quotes: none;
  }

  // custom
  .flex {
    display: flex
  }

  .justify-flex-end {
    justify-content: flex-end;
  }

  .align-center {
    align-items: center;
  }
`;
