"use client";

import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";

interface ItemProps {
  name: string;
}

const Item = ({ name }: ItemProps) => {
  return (
    <Stack direction="row" alignItems="center" flex="1">
      <CardBody>
        <Heading size="md" mb="15px">
          {name}
        </Heading>
      </CardBody>
    </Stack>
  );
};

export default Item;
