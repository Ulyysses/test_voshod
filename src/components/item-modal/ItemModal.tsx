"use client";

import { IItemModal } from "@/types";
import {
  Modal,
  Text,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  SkeletonText,
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
    fetch("https://taxivoshod.ru/testapi/?w=item&id=" + id).then(
      (res) => res.json() as unknown as IItemModal
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

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Modal isOpen={true} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p="40px" height="200px">
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {isPending ? (
            <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
          ) : (
            <>
              <Heading as="h3">{data.name}</Heading>
              <Text>{data.text}</Text>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
