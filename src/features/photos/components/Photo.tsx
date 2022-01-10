import React, { ReactElement } from "react";
import { HStack, chakra, Image, useDisclosure } from "@chakra-ui/react";
import { PhotoModal } from "./PhotoModal";

type Src = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

interface Props {
  id: number;
  url: string;
  photographer: string;
  color: string;
  src: Src;
}

export function Photo({
  id,
  url,
  photographer,
  color,
  src,
}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.8 }}
        borderRadius="xl"
        cursor="pointer"
        d="inline-block"
        onClick={onOpen}
        src={src.large}
        alt="Alt"
        key="src"
        w="100%"
        mb={2}
      />
      <PhotoModal isOpen={isOpen} onClose={onClose} src={src.original} />
    </>
  );
}
