import ItemList from "@/components/item-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница",
};

interface ItemListPage {
  params: {
    page: string;
  };
}

const ItemListPage = ({ params }: ItemListPage) => {
  const page = params.page;
  metadata.title = `Страница ${page}`;
 
  return <ItemList page={page} />;
};

export default ItemListPage;
