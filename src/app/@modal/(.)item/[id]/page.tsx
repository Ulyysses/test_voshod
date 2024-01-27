import ItemModal from "@/components/modal/ItemModal";
import { ModalPage } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Элемент",
};

const ModalListPage = ({ params }: ModalPage) => {
  const id = params.id;
  metadata.title = `Элемент ${id}`;
  
  return (
    <ItemModal id={id} />
  );
};

export default ModalListPage;
