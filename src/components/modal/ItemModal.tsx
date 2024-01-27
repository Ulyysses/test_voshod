"use client";

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
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const ItemModal = ({
  id,
  isInsideList = true,
}: {
  id: string;
  isInsideList?: boolean;
}) => {
  const { onClose } = useDisclosure();
  const router = useRouter();

  const fetchModalData = (id: string) =>
    fetch("https://taxivoshod.ru/testapi/?w=item&id=" + id).then((res) =>
      res.json()
    );

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["modal", id],
    queryFn: () => fetchModalData(id),
  });

  const handleCloseModal = () => {
    if (isInsideList) {
      router.back();
    } else {
      router.push("/list");
    }
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p="40px">
        <ModalCloseButton />
        <ModalBody>
          <Heading>{data?.name}</Heading>
          <Text>{data?.text}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
