import { Box, Tag, Text } from "@chakra-ui/react"
import Image from "next/image"
import { ButtonHTMLAttributes } from "react"

import style from "../../styles/pages/GalleryGridItem.module.scss"

interface galleryProps {
  onClick: ButtonHTMLAttributes<HTMLDivElement>["onClick"]
  props: any
}

export default function GalleryGridItem({
  props,
  onClick,
}: galleryProps): JSX.Element {
  return (
    <Box w='100%' cursor='pointer' mb={{ base: 0, md: 2 }} onClick={onClick}>
      <Box className={style.gridImgWrap} position='relative'>
        <Image
          src={props.image1.url}
          alt={props.title}
          layout='fill'
          priority
        />
      </Box>
      <Tag
        mt={3}
        mb={1}
        px={2}
        fontSize={{ base: 10, md: 12 }}
        borderRadius={0}
        color='#fff'
        bg='blue.800'
      >
        {props.category}
      </Tag>
      <Text
        pl={{ base: 2, md: 3 }}
        fontSize={{ base: 14, md: 15 }}
        className={style.gridTitle}
      >
        {props.title}
      </Text>
      <Text
        mt={2}
        textAlign='right'
        fontSize={{ base: 12, md: 14 }}
        color='gray.400'
        fontWeight='bold'
      >
        {props.created_year}
      </Text>
    </Box>
  )
}
