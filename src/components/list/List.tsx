"use client";

import { IItem, IPaging } from "@/types";
import { Button, Card, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Item from "../item";

const List = ({ page }: { page: string }) => {
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

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Flex direction="column" gap={2}>
      <Flex gap="10px">
        <Button
          onClick={() => handlePageChange(Math.max(Number(page) - 1, 1))}
          isDisabled={page === "1"}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => {
            if (data.page < data.pages) {
              handlePageChange(Number(page) + 1);
            }
          }}
          isDisabled={data.page === data.pages}
        >
          Next Page
        </Button>
      </Flex>
      {data.items.map((item) => (
        <Card overflow="hidden" variant="outline" maxH="200px" key={item.id}>
          <Link href={`/item/${item.id}`}>
            <Item name={item.name}/>
          </Link>
        </Card>
      ))}
    </Flex>
  );
};

export default List;
