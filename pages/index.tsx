import Layout from '../components/layout/Layout'
import style from '../styles/home.module.scss'

import OurServices from '../components/home/OurServices'
import PartnersCompany from '../components/home/PartnersCompany'
import SkillArea from '../components/home/SkillArea'

import { Box, Container } from '@chakra-ui/react'

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

          <hr />

          <ul>
            <li>tech blog</li>
            <li>service(tinywest/8beat)</li>
            <li>blog</li>
            <li>partner</li>
          </ul>

          <PartnersCompany />

        </Container>
      </Box>
    </Layout>
  )
}
