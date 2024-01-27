import Item from "@/item";
import List from "@/components/list";
import ItemModal from "@/components/modal/ItemModal";
import { Modal, useDisclosure } from "@chakra-ui/react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Страница 1",
};

interface ModalPage {
  params: {
    id: string
  };
}

const ModalListPage = () => {
  
  return (
    <ItemModal />
  );
};

export default ModalListPage;
