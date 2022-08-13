import Layout from '../components/layout/Layout'
import style from '../styles/home.module.scss'

import OurServices from '../components/home/OurServices'
import PartnersCompany from '../components/home/PartnersCompany'
import SkillArea from '../components/home/SkillArea'
import BlogArea from '../components/home/BlogArea'

import { Box, Container } from '@chakra-ui/react'
import ServiceArea from '../components/home/ServiceArea'

export default function Home() {
  return (
    <Layout isHome>
      <Box className={style.contentsArea}>
        <Container
          py={2}
          maxW='container.lg'
        >

          <OurServices />

          <SkillArea />

          <ServiceArea />

          <BlogArea />

          <ul>
            <li>partner</li>
          </ul>

          <PartnersCompany />

        </Container>
      </Box>
    </Layout>
  )
}
