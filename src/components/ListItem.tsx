import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
interface ListItemProps {
  onClick: any;
  media: MediaModel;
}
export const ListItem: React.FC<ListItemProps> = (props) => {
  const img: string = "https://picsum.photos/seed/picsum/400/225";
  return (
    <Box m={2} w="400px" h="225px" as="button" onClick={props.onClick}>
      <Image
        src={
          props.media?.Images?.filter((i: any, x: any) => {
            return i.ImageTypeCode === "FRAME";
          })[0]?.Url || img
        }
        maxWidth="400px"
        h="225px"
        borderRadius={10}
        _hover={{ transform: "scale(0.96) !important" }}
      />
      <Text>{props.media.Title}</Text>
    </Box>
  );
};
