import MainLayout from "@/components/main-layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import LinkNext from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <Box bg="yellow.500">
      <MainLayout>
        <Flex
          direction="row"
          alignItems="center"
          gap="5"
          mb="10px"
        >
          <Text as={LinkNext} href="/" fontSize="3xl">
            Восход
          </Text>
        </Flex>
      </MainLayout>
    </Box>
  );
};

export default memo(Header);
