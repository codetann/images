import { ReactElement } from "react";
import { Image, useDisclosure } from "@chakra-ui/react";
import { MediaGridModal } from "./MediaGridModal";
import { styles } from "./styles";

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
        {...styles.image}
        onClick={onOpen}
        src={src.large}
        alt="Alt"
        key="src"
      />
      <MediaGridModal isOpen={isOpen} onClose={onClose} src={src.original} />
    </>
  );
}
