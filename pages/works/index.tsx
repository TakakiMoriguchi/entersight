import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { client } from "../../libs/client"
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
  Center,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import style from "../../styles/pages/worksList.module.scss"
import NextLink from "next/link"
import Layout from "../../components/layout/Layout"
import LargeContainer from "../../components/global/LargeContainer"
import SearchBox from "../../components/works/SearchBox"

const PER_PAGE = 2

export const getStaticProps = async () => {
  const worksData = await client.get({
    endpoint: "works",
  })

  return {
    props: {
      worksData: worksData.contents,
      totalCount: worksData.totalCount,
    },
  }
}

const Home: NextPage = ({ worksData }: any) => {
  // -----フィルター機能-----
  // -----カテゴリ検索-----
  const [category, setCategory] = useState<string[]>(["All"])
  const categoryOption: string[] = [
    "All",
    "Design",
    "Program (System)",
    "Analysis",
    "Photograph",
    "Consultant",
    "Others",
  ]

  const categoryChange = (e) => {
    setCurrentPage(1)
    setCategory([categoryOption[e.target.value]])
  }

  const getCategoryPosts = () => {
    let categoryContents = []
    worksData.map((val) => {
      if (category.toString() == "All") {
        categoryContents.push(val)
      } else if (category.toString() == val.category.toString()) {
        categoryContents.push(val)
      }
    })
    return categoryContents
  }
  // -----/カテゴリ検索-----

  // -----キーワード検索----
  const [keyword, setKeyword] = useState<string>("")

  const getKeywordPosts = () => {
    let keywordPosts = []
    for (let i = 0; i < worksData.length; i++) {
      if (
        worksData[i].title.indexOf(keyword) !== -1 ||
        worksData[i].subtitle.indexOf(keyword) !== -1
      ) {
        keywordPosts.push(worksData[i])
      }
    }
    return keywordPosts
  }
  // -----/キーワード検索-----

  const getDataRefresh = () => {
    let targetCategoryPosts = getCategoryPosts()
    let targetKeywordPosts = getKeywordPosts()
    let renderPosts = targetCategoryPosts.filter(
      (catPost) =>
        targetKeywordPosts.filter((keyPost) => keyPost.id === catPost.id)
          .length > 0
    )
    return renderPosts
  }

  let allRenderPosts = getDataRefresh()
  // -----/フィルター機能-----

  // -----ページネーション-----
  const [currentPage, setCurrentPage] = useState(1)
  const [onePageData, setOnePageData] = useState([])

  const getOnePageData = (num: number, data) => {
    let onePagePosts = []
    let offset = (num - 1) * PER_PAGE

    for (let i = 0; i < PER_PAGE; i++) {
      if (data[offset] == undefined) {
        break
      } else {
        onePagePosts.push(data[offset])
        offset++
      }
    }
    return onePagePosts
  }

  useEffect(() => {
    setOnePageData(getOnePageData(1, allRenderPosts))
  }, [category, keyword])

  const clickPagination = (num: number) => {
    setOnePageData(getOnePageData(num, allRenderPosts))
    setCurrentPage(num)
  }
  // -----/ページネーション-----

  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        {/* SearchBox & Graph */}
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <SearchBox
            category={category}
            categoryChange={categoryChange}
            categoryOption={categoryOption}
            setKeyword={setKeyword}
            renderingData={allRenderPosts}
            PER_PAGE={PER_PAGE}
          />

          <Box bg='#E6FFFA' height='80px'></Box>
        </SimpleGrid>

        <Box>
          <WorksList props={onePageData} />
        </Box>

        {/* pagination */}
        {allRenderPosts.length > PER_PAGE ? (
          <Pagination
            totalCount={allRenderPosts.length}
            PER_PAGE={PER_PAGE}
            getNextPage={clickPagination}
            currentPage={currentPage}
          />
        ) : null}
      </LargeContainer>
    </Layout>
  )
}

export function WorksList({ props }) {
  return (
    <>
      <TableContainer>
        <Table my={6} size={{ base: "sm", md: "md" }}>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Deadline</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.length !== 0 ? (
              props.map((val, i) => (
                <Tr key={i}>
                  <Td w={{ base: "", md: "auto" }}>
                    <Text>{val.title}</Text>
                    <Text fontSize='xs'>{val.subtitle}</Text>
                  </Td>
                  <Td>￥&nbsp;{val.price}</Td>
                  <Td>
                    {val.deadline}
                    {val.deadline_unit}
                  </Td>
                  <Td>
                    <NextLink href={`/works/${val.id}`}>
                      <Button
                        as='a'
                        cursor='pointer'
                        variant='outline'
                        size={{ base: "sm", md: "md" }}
                      >
                        詳細
                      </Button>
                    </NextLink>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td>Not found...</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Text
        display={{ base: "flex", md: "none" }}
        alignItems='center'
        justifyContent='flex-end'
        textAlign='right'
        fontSize='12px'
      >
        scroll
        <ChevronRightIcon fontSize={"lg"} />
      </Text>
    </>
  )
}

export function Pagination({ totalCount, PER_PAGE, getNextPage, currentPage }) {
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i)
  }

  return (
    <Box py='12'>
      <Breadcrumb textAlign={"center"}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
          <BreadcrumbItem key={number}>
            <Text
              mx='2'
              onClick={() => getNextPage(number)}
              cursor='pointer'
              fontSize='md'
              fontWeight={currentPage == number ? "bold" : ""}
              borderBottom={currentPage == number ? "2px solid" : ""}
            >
              {number}
            </Text>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  )
}

export default Home
