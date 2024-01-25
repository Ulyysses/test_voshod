import List from "@/list";
import MainLayout from "@/main-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница",
};

interface ListPage {
  params: {
    page: string;
  };
}

const ListPage = ({ params }: ListPage) => {
  const page = params.page;
  metadata.title = `Страница ${page}`;

  return <List page={page} />;
};

export default ListPage;
