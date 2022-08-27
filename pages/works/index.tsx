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
} from '@chakra-ui/react'
import style from '../../styles/pages/worksList.module.scss'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'

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
  console.log(worksData)

  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        {/* PC and iPad only */}
        <Box className={style.pc}>
          <WorksListForPc props={ worksData } />
        </Box>

        {/* SP only */}
        <Box className={style.sp}>
          <WorksListForSp props={ worksData } />
        </Box>
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
          { props.map((val) => (
            <>
              <Tr>
                <Td>{ val.title }</Td>
                <Td>{ val.price }</Td>
                <Td>{ val.deadline }{ val.deadline_unit }</Td>
                <Td>detail</Td>
              </Tr>
            </>
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