import React, { ReactElement } from "react";
import { VStack } from "@chakra-ui/react";
import { PhotoGrid } from "../../features/photos";
import data from "../../features/photos/components/data.json";

interface Props {}

export function Home({}: Props): ReactElement {
  return (
    <VStack w="100%" h="100%">
      <PhotoGrid photos={data} />
    </VStack>
  );
}
