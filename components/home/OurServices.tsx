import {
  Box,
  Stack,
  Text
} from "@chakra-ui/react"
import SectionTitle from '../global/SectionTitle'

const WorkApi = [
  {
    id: "1",
    date: "2022-07-18",
    title: "JAMstackブログ構築",
    sub_title: "最先端技術を使用した、高速なWEBサイトを構築します。",
    contents: "<img src='https://picsum.photos/200/300'><h4>title</h4><p>body</p>",
    price_bottom: "240000",
    period: "6",
    period_week: "週",
    thumbnail: "https://picsum.photos/600/400",
    tag: ['HP制作', 'web']
  },
  {
    id: "2",
    date: "2022-07-18",
    title: "JAMstackブログ構築",
    sub_title: "最先端技術を使用した、高速なWEBサイトを構築します。",
    contents: "<img src='https://picsum.photos/200/300'><h4>title</h4><p>body</p>",
    price_bottom: "240000",
    period: "6",
    period_week: "週",
    thumbnail: "https://picsum.photos/600/400",
    tag: ['HP制作', 'web']
  },
  {
    id: "3",
    date: "2022-07-18",
    title: "JAMstackブログ構築",
    sub_title: "最先端技術を使用した、高速なWEBサイトを構築します。",
    contents: "<img src='https://picsum.photos/200/300'><h4>title</h4><p>body</p>",
    price_bottom: "240000",
    period: "6",
    period_week: "週",
    thumbnail: "https://picsum.photos/600/400",
    tag: ['HP制作', 'web']
  },
  {
    id: "4",
    date: "2022-07-18",
    title: "JAMstackブログ構築",
    sub_title: "最先端技術を使用した、高速なWEBサイトを構築します。",
    contents: "<img src='https://picsum.photos/200/300'><h4>title</h4><p>body</p>",
    price_bottom: "240000",
    period: "6",
    period_week: "週",
    thumbnail: "https://picsum.photos/600/400",
    tag: ['HP制作', 'web']
  },
]

export default function OurServices() {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        spacing='1rem'
        display='flex'
        alignItems='center'
        height='80vh'
      >
        <Box
          w='100%'
          p={5}
        >
          <SectionTitle
            arg="WORKS"
            sub="The best service we can provide"
            align="left"
          />
        </Box>

        <Box
          w='100%'
          p={5}
        >
          <Stack>
            { WorkApi.map((val) => (
              <Box p={2} key={val.id}>
                <Text fontWeight='bold'>{ val.title }</Text>
                <Text>{ val.sub_title }</Text>
              </Box>
            ))}
          </Stack>
        </Box>

      </Stack>
    </>
  )
}