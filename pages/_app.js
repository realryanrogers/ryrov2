import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../utils/theme"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </> 
  );
}

export default MyApp
