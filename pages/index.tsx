import { Box, Container } from '@chakra-ui/react'

import Layout from '../components/layout/Layout'
import style from '../styles/home.module.scss'

import WorkArea from '../components/home/WorkArea'
import SkillArea from '../components/home/SkillArea'
import ServiceArea from '../components/home/ServiceArea'
import BlogArea from '../components/home/BlogArea'
import PartnerArea from '../components/home/PartnerArea'

export default function Home() {
  return (
    <Layout isHome>
      <Box className={style.contentsArea}>
        <Container
          py={2}
          maxW='container.lg'
        >

          <WorkArea />

          <SkillArea />

          <ServiceArea />

          {/* <BlogArea /> */}

          <PartnerArea />

        </Container>
      </Box>
    </Layout>
  )
}
