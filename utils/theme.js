import { createGlobalStyle, styled } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
  color: inherit;
  text-decoration: none;
  }

  .main {
  margin: auto;
  max-width: 1024px;
  padding: 1.5rem;
}`

export const theme = {
  colors: {
    primary: "#0070f3",
    headerBg: "#ecf0f1",
    primaryAccent: "#0b7fab",
  },
  fonts: {
    primaryText: "Open Sans, Sans-Serif",
    headingText: "Kameron",
  },
}
