import React, { ReactElement } from "react";
import {
  Button,
  Heading,
  HStack,
  Spacer,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Search } from "./Search";
import { FaBars } from "react-icons/fa";

interface Props {
  // children: ReactElement
  onOpen: () => void;
}

const parsePathname = (pathname: string) => {
  return pathname === "/"
    ? "Home"
    : pathname.charAt(1).toUpperCase() + pathname.substring(2);
};

export function NavBar({ onOpen }: Props): ReactElement {
  const location = useLocation();
  const [isLargerThan768] = useMediaQuery("(min-width: 1200px)");

  return (
    <HStack w="100%" h="5rem" px={4}>
      <Heading as="h2" size="xl">
        {parsePathname(location.pathname)}
      </Heading>
      <Spacer />
      {isLargerThan768 ? (
        <Search />
      ) : (
        <IconButton
          onClick={onOpen}
          aria-label="drawer button"
          icon={<FaBars />}
        />
      )}
    </HStack>
  );
}
