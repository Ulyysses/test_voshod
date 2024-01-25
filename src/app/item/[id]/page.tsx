import List from "@/list";
import ItemModal from "@/modal/ItemModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница 1",
};

const ModalListPage = () => {
  return (
    <>
      <List page={"1"} />
      <ItemModal />
    </>
  );
};

export default ModalListPage;
