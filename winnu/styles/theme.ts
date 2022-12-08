import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./components/buttonStyles";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FCCF47",
      secondary: "#FFAFA3",
    },
  },
  components: {
    Button,
  },
});
