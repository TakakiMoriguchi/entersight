import { client } from "../../libs/client"

import { useState } from "react"
import type { NextPage } from "next"
import {
  SimpleGrid,
  Text,
  Box,
  InputRightElement,
  Button,
  InputGroup,
  Input,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import Layout from "../../components/layout/Layout"
import LargeContainer from "../../components/global/LargeContainer"
import GalleryGridItem from "../../components/gallery/GalleryGridItem"
import GalleryModal from "../../components/gallery/GalleryModal"
import Pagenation from "../../components/global/Pagenation"

const PER_PAGE = 12

export const getStaticProps = async () => {
  const galleryData = await client.get({
    endpoint: "galleries",
  })

  return {
    props: {
      galleryData: galleryData.contents,
      totalCount: galleryData.totalCount,
    },
  }
}

const Home: NextPage = ({ galleryData, totalCount }: any) => {
  // ------------パスワード入力・閲覧機能--------------

  const [connect, setConnect] = useState<boolean>(false)
  const [showPsWord, setShowPsWord] = useState<boolean>(false)
  const [inputPass, setInputPass] = useState<string>("")
  const handleShowPsWord = () => setShowPsWord(!showPsWord)

  // パスワードクリック
  const handleConfirmation = () => {
    if (inputPass === process.env.NEXT_PUBLIC_GALLERY_PAGE_PASSWORD) {
      setConnect(true)
    } else {
      alert("パスワードが間違いです。")
    }
  }
  // ------------パスワード入力・閲覧機能---------------

  // ------------コンテンツ取得・表示機能---------------

  // PER_PAGEの数だけ要素を取得
  const getOnePageData = (num: number) => {
    let onePageData = []
    let offset = (num - 1) * PER_PAGE

    for (let i = 0; i < PER_PAGE; i++) {
      if (galleryData[offset] == undefined) {
        break
      }
      onePageData.push(galleryData[offset])
      offset++
    }
    return onePageData
  }

  // 初期コンテンツ取得
  const [onePageData, setOnePageData] = useState(getOnePageData(1))
  const [currentPage, setCurrentPage] = useState(1)

  // ページネーションクリック時表示データの更新→レンダリング
  const handlePagination = (num: number) => {
    setOnePageData(getOnePageData(num))
    setCurrentPage(num)
  }
  // ------------コンテンツ取得・表示機能---------------

  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        {connect ? (
          <>
            <article>
              <SimpleGrid
                as='ul'
                columns={[2, 3, 4]}
                spacing={6}
                listStyleType='none'
                py={{ base: "30px", md: "60px" }}
              >
                {onePageData.map((gallery, id) => (
                  <Box key={id}>
                    <GalleryContent props={gallery} />
                  </Box>
                ))}
              </SimpleGrid>
            </article>

            {totalCount > PER_PAGE ? (
              <Pagenation
                totalCount={totalCount}
                PER_PAGE={PER_PAGE}
                props={handlePagination}
                currentPage={currentPage}
              />
            ) : null}
          </>
        ) : (
          <Box
            p={{ base: "2em 1em", md: "5em" }}
            borderRadius='12px'
            maxW='700px'
            mx='auto'
            my='3em'
          >

            <Text textAlign='center' fontSize={18} fontWeight='bold' mb={4}>
              パスワードを入力してください。
            </Text>

            <Text textAlign='center' fontSize={18} mb={4}>
              秘密保持契約の観点からパスワードを設定しています。
            </Text>

            <InputGroup size='lg'>
              <Input
                pr='4.5rem'
                type={showPsWord ? "text" : "password"}
                placeholder='パスワードを入力してください。'
                onChange={(e) => setInputPass(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShowPsWord}>
                  {showPsWord ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Box textAlign='center'>
              <Button
                onClick={handleConfirmation}
                rightIcon={<ArrowForwardIcon />}
                colorScheme='blue'
                mx='auto'
                mt={4}
              >
                閲覧する
              </Button>
            </Box>
          </Box>
        )}
      </LargeContainer>
    </Layout>
  )
}

export function GalleryContent({ props }) {
  const [show, setShow] = useState<boolean>(false)
  const openModal = () => {
    setShow(true)
  }

  return (
    <li>
      <GalleryGridItem onClick={openModal} props={props} />
      <GalleryModal show={show} setShow={setShow} props={props} />
    </li>
  )
}

export default Home
