import React, { ReactElement } from "react";
import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import { NavBar } from "../navbar/NavBar";
import { Drawer } from "../navbar/Drawer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Page({ children }: Props): ReactElement {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack w="100%" maxW="100%" minH="100vh" bg="bg.dark.default">
      <HStack w="100%">
        <Drawer isOpen={isOpen} onClose={onToggle} />
        <VStack w="100%" h="100%">
          <NavBar onOpen={onToggle} />
          {children}
        </VStack>
      </HStack>
    </VStack>
  );
}
