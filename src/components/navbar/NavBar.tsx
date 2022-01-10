import React, { ReactElement } from "react";
import { Button, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Search } from "./Search";

interface Props {
  // children: ReactElement
}

export function NavBar({}: Props): ReactElement {
  const location = useLocation();

  return (
    <HStack w={"full"}>
      <Heading as={"h2"} size={"lg"}>
        {location.pathname === "/" ? "Home" : location.pathname.toUpperCase}
      </Heading>
      <Spacer />
      <Button onClick={() => console.log(location)}>LOG</Button>
      <Search />
    </HStack>
  );
}
