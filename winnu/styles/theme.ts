import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./components/buttonStyles";
import "@fontsource/manrope";
import "@fontsource/sora";
import "@fontsource/inter";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FCCF47",
      secondary: "#FFAFA3",
    },
    text: {
      grey01: "#1E1E1E",
      grey02: "#383838",
      grey03: "#787878",
      peach: "#E1B0A8",
    },
  },
  fonts: {
    sora: "Sora, sans-serif",
    manrope: "Manrope, sans-serif",
    inter: "Inter, sans-serif",
  },
  breakpoints: {
    sm: "520px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: {
    Button,
  },
});
