import { ReactElement } from "react";
import { ChakraProps, StackProps } from "@chakra-ui/react";

export interface Props {}

export interface DrawerLinkProps {
  link: string;
  href: string;
  icon: ReactElement;
  path: string;
  onClose: () => void;
}

export interface Styles {
  button: (theme: any) => ChakraProps;
  vstack: StackProps;
  text: ChakraProps;
}
