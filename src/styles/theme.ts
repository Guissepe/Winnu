import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./components/buttonStyles";
import "@fontsource/manrope";
import "@fontsource/sora";
import "@fontsource/inter";

export const theme = extendTheme({
  colors: {
    Lightgrey: "#A3A3A3",
    BrowGray: "#B6B6B6",
    Yellow01: "#EBC142",
    Yellow02: "#C9A538",
    Yellow03: "#FFD966",
    border01: "#FFBDB4",
    black01: "#141414",
    dkgrey01: "#1e1e1e",
    grey01: '#1E1E1E',
    grey02: "#383838",
    grey03: "#787878",
    white01: "#F2F2F2",
    white02: "#EAEAEA",
    brand: {
      primary: "#FCCF47",
      secondary: "#FFAFA3",
    },
    text: {
      grey2: "#383838",
      grey3: "#787878",
      grey4: "#949292",
      peach: "#E1B0A8",
      white01: '#FFFFFF'

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
