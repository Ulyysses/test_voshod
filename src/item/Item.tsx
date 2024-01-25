// "use client";

// import ItemModal from "@/modal/ItemModal";
// import { IItem, IPaging } from "@/types";
// import {
//   Button,
//   Card,
//   CardBody,
//   Flex,
//   Heading,
//   Stack,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const fetchItemModal = async () => {
//   const api = "https://taxivoshod.ru/testapi/?w=item&id=5";
//   try {
//     const response = await fetch(api);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(`Error fetching item: ${error}`);
//   }
// };

// const Item = ({ id }: { id: string }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const router = useRouter();

//   const { data: dataModal, refetch } = useQuery({
//     queryKey: ["item-modal"],
//     queryFn: fetchItemModal,
//     enabled: false,
//   });

//   const handleOpenModal = async () => {
//     onOpen();
//     await refetch();
//     router.push("/item");
//   };

//     const selectedItem = data.items.find((item) => item.id === Number(id));

//     return (
//       <Flex direction="column" gap={2}>
//         <Card overflow="hidden" variant="outline" maxH="200px">
//           <Button onClick={handleOpenModal}>
//             <Stack direction="row" alignItems="center" flex="1">
//               <CardBody>
//                 <Heading size="md" mb="15px">
//                   {selectedItem?.name}
//                 </Heading>
//               </CardBody>
//             </Stack>
//           </Button>
//         </Card>

//         <ItemModal isOpen={isOpen} onClose={onClose} data={dataModal} />
//       </Flex>
//     );
//   }
// };

// export default Item;
