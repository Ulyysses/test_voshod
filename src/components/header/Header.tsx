"use client";

import MainLayout from "@/components/main-layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorMode,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="yellow.500">
      <MainLayout>
        <Flex direction="row" alignItems="center" gap="5" mb="10px">
          <Heading as="h1" size="xl">
            Восход
          </Heading>
        </Flex>
      </MainLayout>
    </Box>
  );
};

export default Header;
