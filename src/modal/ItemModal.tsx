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

const ItemModal = ({page, setModal}) => {
  const {onClose} = useDisclosure();
  const router = useRouter();

  // useEffect(() => {
  //   onOpen();
  // }, [onOpen]);

  // const handleCloseModal = (page: string) => {
    
  //   // router.back();
  //   window.history.replaceState(null, "", `/list/${page}`);
  //   onClose();
  // }

  return (
    <Modal isOpen={true} onClose={() => {
      setModal(false)
      window.history.replaceState(null, "", `/list/${page}`);
    }}>
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
