import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    bg: {
      dark: {
        default: "#100F10",
      },
    },
  },
});

export function ThemeProvider({ children }: any) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
