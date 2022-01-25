import React, { ReactElement, useState } from "react";
import {
  IconButton,
  Input,
  HStack,
  SlideFade,
  chakra,
  StackProps,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface Props {
  // hstack: StackProps;
}

export function Search({}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <HStack
      transition="all .2s ease-in-out"
      border="1px solid transparent"
      borderRadius=".5rem"
      spacing={0}
    >
      <chakra.form display={"flex"} onSubmit={handleSubmit}>
        <Input
          borderRadius=".5rem 0 0 .5rem"
          placeholder="Search here..."
          borderColor={"transparent"}
          bg="whiteAlpha.100"
          w="20rem"
        />

        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          borderRadius="0 .5rem .5rem 0"
          icon={<FaSearch />}
          aria-label="Search"
          bg="whiteAlpha.100"
          _focus={{}}
        />
      </chakra.form>
    </HStack>
  );
}
