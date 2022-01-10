import React, { ReactElement } from "react";
import { HStack, chakra, Image } from "@chakra-ui/react";

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
  return (
    <Image
      d="inline-block"
      borderRadius="xl"
      src={src.large}
      alt="Alt"
      key="src"
      w="100%"
      mb={2}
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{ transform: "scale(1.02)" }}
    />
  );
}

// const Test = () => (
//   <Image
//     d="inline-block"
//     borderRadius="xl"
//     src={src.large}
//     alt="Alt"
//     key="src"
//     w={isFocused ? "200px" : "100%"}
//     top={isFocused ? "50%" : "auto"}
//     left={isFocused ? "50%" : "auto"}
//     zIndex={50}
//     mb={2}
//     cursor="pointer"
//     transition="all 0.2s ease-in-out"
//     position={isFocused ? "absolute" : "relative"}
//     _hover={{
//       transform: "scale(1.02)",
//     }}
//     onClick={() => setIsFocused(!isFocused)}
//   />
// );
