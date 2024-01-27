"use client";

import MainLayout from "@/components/main-layout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box bg="yellow.500">
      <MainLayout>
        <Flex direction="row" alignItems="center" gap="5" mb="10px">
          <Link href="/">
            <Heading as="h2" size="xl">
              Восход
            </Heading>
          </Link>
        </Flex>
      </MainLayout>
    </Box>
  );
};

export default Header;
