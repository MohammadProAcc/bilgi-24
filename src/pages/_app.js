import { ThemeProvider } from "@mui/material";
import { theme, createEmotionCache } from "@/lib";
import "@/styles/globals.css";
import { CacheProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={createEmotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
