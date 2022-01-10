import React, { ReactElement, useState } from "react";
import {
  IconButton,
  Input,
  HStack,
  SlideFade,
  chakra,
  ring,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface Props {}

export function Search({}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <HStack
      spacing={0}
      border="1px solid transparent"
      borderRadius=".5rem"
      transition="all .2s ease-in-out"
      // _hover={{ opacity: ".7" }}
    >
      <chakra.form display={"flex"} onSubmit={handleSubmit}>
        <SlideFade in={isOpen} offsetY={0} offsetX={"10px"}>
          <Input
            placeholder="Search here..."
            bg="whiteAlpha.100"
            borderColor={"transparent"}
            borderRadius=".5rem 0 0 .5rem"
            w="20rem"
            // _hover={{}}
            // _focus={{ bg: "none", borderColor: "whiteAlpha.500" }}
          />
        </SlideFade>
        <IconButton
          borderRadius={isOpen ? "0 .5rem .5rem 0" : ".5rem"}
          _focus={{}}
          bg="whiteAlpha.100"
          aria-label="Search"
          icon={<FaSearch />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </chakra.form>
    </HStack>
  );
}
