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
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  src: string;
}

export function MediaGridModal({ isOpen, onClose, src }: Props): ReactElement {
  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <Image src={src} />
      </ModalContent>
    </Modal>
  );
}
