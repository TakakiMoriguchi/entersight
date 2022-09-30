import { Box, Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react"

export default function Pagination({
  totalCount,
  PER_PAGE,
  props,
  currentPage,
}) {
  // totalCount -> 全体のページ数
  // PER_PAGE -> 1ページに表示する要素数
  // props -> クリックで動作する処理
  // currentPage -> 現在のページ

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => start + i)
  }

  const clickFunction = (e) => {
    return props(e)
  }

  return (
    <Box py='12'>
      <Breadcrumb textAlign={"center"}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
          <BreadcrumbItem key={number}>
            <Text
              mx='2'
              fontSize='md'
              onClick={() => clickFunction(number)}
              cursor='pointer'
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
