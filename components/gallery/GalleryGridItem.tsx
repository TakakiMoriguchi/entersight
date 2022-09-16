import { Box, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface galleryProps {
  onClick: ButtonHTMLAttributes<HTMLDivElement>["onClick"];
  props: any;
}

export default function GalleryGridItem({
  props,
  onClick,
}: galleryProps): JSX.Element {
  return (
    <Box w="100%" cursor="pointer" mb={6} onClick={onClick}>
      <Box className="grid-imgWrap" position="relative">
        <Image src={props.image1.url} alt={props.title} layout="fill" />
      </Box>
      <Tag
        mt={4}
        mb={1}
        px={3}
        fontSize={14}
        borderRadius={0}
        color="#fff"
        bg="blue.800"
      >
        {props.category}
      </Tag>
      <Text pl={2} fontSize={16} className="grid-title">
        {props.title}
      </Text>
    </Box>
  );
}
