import List from "@/components/list";
import ItemModal from "@/components/modal/ItemModal";
import { ModalPage } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Элемент",
};

const ListPage = ({ params }: ModalPage) => {
  const id = params.id;
  metadata.title = `Элемент ${id}`;

  return (
    <>
      <List page={"1"} />
      <ItemModal id={id} isInsideList={false}/>
    </>
  );
};

export default ListPage;
