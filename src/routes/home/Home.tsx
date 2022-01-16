import React, { ReactElement } from "react";
import { VStack } from "@chakra-ui/react";
import { MediaGrid } from "@components";
import data from "../../features/photos/components/data.json";

interface Props {}

export function Home({}: Props): ReactElement {
  return (
    <VStack w="100%" h="100%">
      <MediaGrid media={data} />
    </VStack>
  );
}
