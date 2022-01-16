import { Page, Menu } from "@components";
import { VStack, HStack } from "@chakra-ui/react";
import categories from "../data/categories.json";

export function Photos() {
  return (
    <VStack w="100%" maxW="100%">
      <HStack w="100%" justify="left">
        <Menu
          title="Categories"
          onChange={(value) => console.log(value)}
          options={categories}
        />
      </HStack>
    </VStack>
  );
}
