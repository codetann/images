import React, { ReactElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Image,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaHeart, FaArrowDown, FaRegHeart } from "react-icons/fa";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  src: string;
}

export function MediaGridModal({ isOpen, onClose, src }: Props): ReactElement {
  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent p="1rem">
        <Image src={src} />
        <HStack w="100%" justify="right" pt="1rem">
          <IconButton
            color="green.400"
            icon={<FaArrowDown />}
            aria-label="Download"
          />
          <IconButton color="red.400" icon={<FaRegHeart />} aria-label="Like" />
        </HStack>
      </ModalContent>
    </Modal>
  );
}
