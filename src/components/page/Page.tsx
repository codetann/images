import React, { ReactElement } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import { NavBar } from "../navbar/NavBar";
import { Drawer } from "../navbar/Drawer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Page({ children }: Props): ReactElement {
  return (
    <VStack w="100%" maxW="100%" minH="100vh" bg="bg.dark.default">
      <NavBar />
      <HStack w="100%">
        <VStack w="25rem">
          <Drawer />
        </VStack>
        {children}
      </HStack>
    </VStack>
  );
}
