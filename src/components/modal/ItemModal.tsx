"use client";

import { IModal } from "@/types";
import {
  Modal,
  Text,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ItemModal = () => {
  const {onClose, onOpen} = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleCloseModal = () => {
    router.back();
    onClose();
  }

  return (
    <Modal isOpen={true} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p="40px">
        <ModalCloseButton />
        <ModalBody>
          <Heading>Пупкин</Heading>
          <Text>Вася</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
