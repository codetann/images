import React, { ReactElement } from "react";
import { Photo } from "./MediaGridItem";
import { Box } from "@chakra-ui/react";

interface Props {
  media: any;
}

export function MediaGrid({ media }: Props): ReactElement {
  return (
    <Box
      padding={4}
      w="100%"
      maxW="100%"
      mx="auto"
      sx={{ columnCount: [1, 2, 3, 4], columnGap: "8px" }}
    >
      {media.map((p: any) => (
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
