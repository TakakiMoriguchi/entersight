import { Box, Container } from "@chakra-ui/react"
import { client } from "../libs/client"

import Layout from "../components/layout/Layout"
import style from "../styles/home.module.scss"

import WorkArea from "../components/home/WorkArea"
import SkillArea from "../components/home/SkillArea"
import ServiceArea from "../components/home/ServiceArea"
import BlogArea from "../components/home/BlogArea"
import PartnerArea from "../components/home/PartnerArea"
import LargeContainer from "../components/global/LargeContainer"

export default function Home({ worksData, blogsData }) {
  return (
    <Layout isHome>
      <Box className={style.contentsArea}>
        <LargeContainer>
          <WorkArea props={worksData} />

          <SkillArea />

          <ServiceArea />

          <BlogArea props={blogsData} />

          <PartnerArea />
        </LargeContainer>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const worksData = await client.get({
    endpoint: "works",
    queries: { limit: 4 },
  })
  const blogsData = await client.get({
    endpoint: "blogs",
    queries: { limit: 4 },
  })
  const gallariesData = await client.get({
    endpoint: "galleries",
    queries: { limit: 4 },
  })

  return {
    props: {
      worksData: worksData.contents,
      blogsData: blogsData.contents,
      gallariesData: gallariesData.contents,
    },
  }
}
