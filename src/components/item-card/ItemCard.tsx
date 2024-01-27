import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import LinkNext from "next/link";
import { memo } from "react";

interface ItemProps {
  name: string;
  id: number;
}

const ItemCard = ({ name, id }: ItemProps) => {
  return (
    <Card
      as={LinkNext}
      href={`/item/${id}`}
      overflow="hidden"
      variant="outline"
      maxH="200px"
    >
      <CardBody>
        <Heading size="md" mb="15px" as="h2">
          {name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default memo(ItemCard);
