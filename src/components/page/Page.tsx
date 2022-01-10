import React, { ReactElement } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import { NavBar } from "../navbar/NavBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Page({ children }: Props): ReactElement {
  return (
    <VStack w={"100%"} maxW={"100vw"} minH={"100vh"} bg={"bg.dark.default"}>
      <NavBar />
      {children}
    </VStack>
  );
}
