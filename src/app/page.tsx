import { Heading, Link } from "@chakra-ui/react";
import { Metadata } from "next";
import LinkNext from "next/link";

export const metadata: Metadata = {
  title: "Восход",
};

const MainPage = () => {
  return (
    <>
      <Heading as="h1" size="xl">
        Добро пожаловать 
      </Heading>
      <Link as={LinkNext} href="/list">
        Перейти к списку элементов
      </Link>
    </>
  );
};

export default MainPage;
