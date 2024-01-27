import ItemList from "@/components/item-list";
import ItemModal from "@/components/item-modal";
import { ModalPage } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Элемент",
};

const ItemPage = ({ params }: ModalPage) => {
  const id = params.id;
  metadata.title = `Элемент ${id}`;

  return (
    <>
      <ItemList page={"1"} />
      <ItemModal id={id} isInsideList={false}/>
    </>
  );
};

export default ItemPage;
