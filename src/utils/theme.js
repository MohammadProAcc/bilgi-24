import { Roboto, Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0A4556",
    },
    sub: {
      main: "#F5B61A",
    },
    plain: {
      main: "#fff",
    },
    deactive: {
      main: "rgba(1,31,40, 50%)",
    },
    info: {
      main: "#F5B61A",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
