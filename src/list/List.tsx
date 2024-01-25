"use client";

import ItemModal from "@/modal/ItemModal";
import { IItem, IPaging } from "@/types";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const List = ({ page }: { page: string }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  console.log("🚀 ~ List ~ setModal:", setModal)

  const fetchList = (page: string) =>
    fetch("https://taxivoshod.ru/testapi/?w=list&page=" + page).then(
      (res) => res.json() as unknown as IPaging<IItem>
    );

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["list", page],
    queryFn: () => fetchList(page),
  });

  const items: IItem[] = data?.items || [];

  const handlePageChange = (newPage: number) => {
    router.push(`/list/${newPage}`);
  };

  const handleOpenModal = () => {
    // router.push("/item/5");
    // window.location.href = "/item/5"
    window.history.replaceState(null, "", "/item/5");
    setModal(true);
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
      {items.map((item) => (
        <Card overflow="hidden" variant="outline" maxH="200px" key={item.id}>
          <Button onClick={handleOpenModal}>
            <Stack direction="row" alignItems="center" flex="1">
              <CardBody>
                <Heading size="md" mb="15px">
                  {item.name}
                </Heading>
              </CardBody>
            </Stack>
          </Button>
        </Card>
      ))}
      
      {modal && <ItemModal page={page} setModal={setModal}/>}
    </Flex>
  );
};

export default List;
