import { Box, Tag, Text } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import style from "../../styles/pages/GalleryModal.module.scss"

export default function GalleryModal({ show, setShow, props }) {
  const closeModal = () => {
    setShow(false)
  }

  // 関数：「image〜」の名前を持つAPIキーを抽出して複数の画像URLを取得
  // 例）microCMSにて{image1:{ url: ***, },image2:{ url: ***, }...},の名前を持ち画像URLなどをJSONで返すAPI
  // imageの文字列を持つkeyを抽出してvalueのurlをimgArrにに追加
  const getImageUrls = () => {
    let imageUrls = []
    Object.keys(props).map((key) => {
      if (key.indexOf("image") !== -1) {
        imageUrls.push(props[key].url)
      }
    })
    return imageUrls
  }

  if (show) {
    return (
      <Box
        onClick={closeModal}
        position='fixed'
        top='0'
        left='0'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        height='100%'
        zIndex='1'
        bg='rgba(0, 0, 0, 0.4)'
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          position='relative'
          maxW='600px'
          w='90%'
          borderRadius='12px'
          bg='#fbfbfb'
          zIndex='2'
        >
          <CloseIcon
            onClick={closeModal}
            display={{ base: "block", md: "none" }}
            position='absolute'
            top='-24px'
            right='8px'
            color='#fdfdfd'
          />
          <div className={style.modalContent}>
            {/* 画像スライダー */}
            <Box className={style.modalImgWrap}>
              <Box className='swiper-wrap' px={{ base: "0", md: "2em" }}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: "#slide-prev",
                    nextEl: "#slide-next",
                  }}
                >
                  {getImageUrls().map((url: string, index: number) => (
                    <SwiperSlide key={`${index}`}>
                      <img src={url} alt={props.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div id='slide-prev' className='swiper-button-prev'></div>
                <div id='slide-next' className='swiper-button-next'></div>
              </Box>
            </Box>
            <Tag
              my={3}
              px={3}
              py={1}
              borderRadius={0}
              fontSize={14}
              color='#fff'
              bg='blue.800'
            >
              {props.category}
            </Tag>
            <Text
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight='bold'
              mb={2}
              color='#333'
            >
              {props.title}
            </Text>
            <Text fontSize={14} color='#333' whiteSpace='pre-wrap'>
              {props.comment}
            </Text>
            <Text
              mt={2}
              textAlign='right'
              color='gray.400'
              fontSize={{ base: 12, md: 14 }}
              fontWeight='bold'
            >
              {props.created_year}
            </Text>
          </div>
        </Box>
      </Box>
    )
  } else {
    return null
  }
}
