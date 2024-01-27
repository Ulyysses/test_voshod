import ItemModal from "@/components/item-modal";
import { ModalPage } from "@/types";

const ItemModalPage = ({ params }: ModalPage) => {
  const id = params.id;
  
  return (
    <ItemModal id={id} />
  );
};

export default ItemModalPage;
