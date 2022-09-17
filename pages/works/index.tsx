import type { NextPage } from 'next'
import { client } from "../../libs/client"
import {
  Box,
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
} from '@chakra-ui/react'
import style from '../../styles/pages/worksList.module.scss'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'
import SearchBox from '../../components/works/SearchBox'

export const getStaticProps = async () => {
  const worksData = await client.get({
    endpoint: "works",
    queries: { limit: 10 }
  })

  return {
    props: {
      worksData: worksData.contents
    }
  }
}

const Home: NextPage = ({ worksData }: any) => {
  return (
    <Layout isHome={undefined}>
      <LargeContainer>

        {/* SearchBox & Graph */}
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <SearchBox />
          <Box bg='#E6FFFA' height='80px'></Box>
        </SimpleGrid>

        {/* PC and iPad only */}
        <Box className={style.pc}>
          <WorksListForPc props={ worksData } />
        </Box>

        {/* SP only */}
        <Box className={style.sp}>
          <WorksListForSp props={ worksData } />
        </Box>

        {/* pagination */}
        <Center my="2rem">&lt;&nbsp;Pagination&nbsp;&gt;</Center>

      </LargeContainer>
    </Layout>
  )
}

export function WorksListForPc ({ props }) {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Deadline</Th>
            <Th>&nbsp;</Th>
          </Tr>
        </Thead>
        <Tbody>
          { props.map((val, i) => (
            <Tr key={i}>
              <Td>
                <Text>{ val.title }</Text>
                <Text fontSize='xs'>{ val.subtitle }</Text>
              </Td>
              <Td>￥&nbsp;{ val.price }</Td>
              <Td>{ val.deadline }{ val.deadline_unit }</Td>
              <Td>
                <Button variant='outline'>詳細</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export function WorksListForSp ({ props }) {
  return (
    <>
      <Table>
        <Tbody>
          <Tr>
            <Th>Title</Th>
            <Td></Td>
          </Tr>
          <Tr>
            <Th>Price/Deadline</Th>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}

export default Home;