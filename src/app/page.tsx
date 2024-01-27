import { Heading } from "@chakra-ui/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Восход",
};

const ListPage = () => {
  return (
    <Link href="/list">
      <Heading as="h1" size="xl">
        Перейти к списку элементов
      </Heading>
    </Link>
  );
};

export default ListPage;
