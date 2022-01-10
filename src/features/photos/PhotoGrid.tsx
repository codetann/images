import React, { ReactElement } from "react";
import { Photo } from "./components/Photo";
import { Box } from "@chakra-ui/react";

interface Props {
  photos: any;
}

export function PhotoGrid({ photos }: Props): ReactElement {
  return (
    <Box
      padding={4}
      w="100%"
      maxW="900px"
      mx="auto"
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
    >
      {photos.map((p: any) => (
        <Photo
          photographer={p.photographer}
          color={p.color}
          src={p.src}
          url={p.url}
          key={p.id}
          id={p.id}
        />
      ))}
    </Box>
  );
}
