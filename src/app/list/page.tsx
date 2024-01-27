import ItemList from "@/components/item-list";
import { Heading, VisuallyHidden } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница 1",
};

const ItemListPage = () => {
  return (
    <>
      <VisuallyHidden>
        <Heading as="h1">Список элементов</Heading>
      </VisuallyHidden>
      <ItemList page={"1"} />
    </>
  );
};

export default ItemListPage;
