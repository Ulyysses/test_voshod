"use client";

import { IItem, IPaging } from "@/types";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import ItemCard from "../item-card";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ItemList = ({ page }: { page: string }) => {
  const router = useRouter();

  const fetchList = (page: string) =>
    fetch("https://taxivoshod.ru/testapi/?w=list&page=" + page).then(
      (res) => res.json() as unknown as IPaging<IItem>
    );

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["list", page],
    queryFn: () => fetchList(page),
  });

  const handlePageChange = (newPage: number) => {
    router.push(`/list/${newPage}`);
  };

  const handleClickPrevPage = () => {
    handlePageChange(Math.max(Number(page) - 1, 1));
  };

  const handleClickNextPage = () => {
    if (data && data.page < data.pages) {
      handlePageChange(Number(page) + 1);
    }
  };

  if (isPending) {
    return (
      <Flex height="80vh" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Flex direction="column" gap={2}>
      <Flex gap="10px">
        <Button
          onClick={handleClickPrevPage}
          isDisabled={page === "1"}
          aria-label="Предыдущая страница"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          onClick={handleClickNextPage}
          isDisabled={data.page === data.pages}
          aria-label="Следующая страница"
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
      {data.items.map(({ id, name }) => (
        <ItemCard key={id} name={name} id={id} />
      ))}
    </Flex>
  );
};

export default ItemList;
