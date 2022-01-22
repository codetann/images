import { ChakraProps } from "@chakra-ui/react";

interface Props {
  onChange: (value: any) => void;
  title: string;
  options: MenuOptions;
}

interface Styles {
  menuList: ChakraProps;
  menuButton: ChakraProps;
}

interface Option {
  name: string;
  value: string;
}

type MenuOptions = Option[];

export const styles: Styles = {
  menuButton: {
    bg: "whiteAlpha.100",
    textAlign: "left",
    p: ".5rem 1rem",
    rounded: "md",
    w: "10rem",
    h: "3rem",
  },
  menuList: {
    bg: "whiteAlpha.100",
  },
};
