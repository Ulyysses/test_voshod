import List from "@/components/list";
import MainLayout from "@/components/main-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница 1",
};

const ListPage = () => {
  return <List page={"1"} />;
};

export default ListPage;
