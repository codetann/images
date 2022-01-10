import React, { ReactElement } from "react";
import { Button, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Search } from "./Search";

interface Props {
  // children: ReactElement
}

const parsePathname = (pathname: string) => {
  return pathname === "/"
    ? "Home"
    : pathname.charAt(1).toUpperCase() + pathname.substring(2);
};

export function NavBar({}: Props): ReactElement {
  const location = useLocation();

  return (
    <HStack w="full" pl="22rem" h="7rem" pr={4}>
      <Heading as="h2" size="2xl">
        {parsePathname(location.pathname)}
      </Heading>
      <Spacer />
      <Search />
    </HStack>
  );
}
