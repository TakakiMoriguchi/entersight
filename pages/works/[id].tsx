import {
  Box,
  Text,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { client } from '../../libs/client'
import type { GetStaticProps, NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'
import style from '../../styles/pages/workDetail.module.scss'
import DateFormatter from '../../components/tools/DateFormatter'

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" })
  const paths = data.contents.map((content) => `/works/${content.id}`)
  return { paths, fallback: false }
};

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "works", contentId: id })
  return {
    props: {
      workData: data
    }
  }
}

const Id: NextPage = ({ workData }: any) => {
  console.log(workData)

  return (
    <Layout isHome={undefined}>
      <LargeContainer>

        <Box>
          <Text
            className={style.category}
            display='inline'
          >
            { workData.category }
          </Text>
        </Box>

        <Heading
          as='h1'
          size={['md', 'xl']}
          py={3}
        >
          { workData.title }
        </Heading>

        <Text className={style.publish}>
          publishedAt:&nbsp;{ DateFormatter(workData.publishedAt) }
        </Text>

        <Box
          py={8}
          dangerouslySetInnerHTML={{ __html: workData.contents }}
        />

        <SimpleGrid columns={2}>
          <Box py={3}>
            <Text fontWeight="bold">PRICE</Text>
            <Box fontSize='2rem' display='flex'>
              <Text
                fontSize='md'
                display='flex'
                alignItems='flex-end'
                p={1.5}
                fontWeight='bold'
              >
                ￥
              </Text>
              <Text>{ workData.price }</Text>
            </Box>
          </Box>

          <Box py={3}>
            <Text fontWeight="bold">DEADLINE</Text>
            <Box fontSize='2rem' display='flex'>
              <Text>{ workData.deadline }</Text>
              <Text
                fontSize='md'
                display='flex'
                alignItems='flex-end'
                p={1.5}
                fontWeight='bold'
              >
                { workData.deadline_unit }
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

      </LargeContainer>
    </Layout>
  )
}

export default Id