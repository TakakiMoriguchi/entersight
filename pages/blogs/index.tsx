import type { NextPage } from 'next'
import { client } from "../../libs/client"
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'

export const getStaticProps = async () => {
  const worksData = await client.get({
    endpoint: "blogs",
    queries: { limit: 10 }
  })

  return {
    props: {
      blogsData: worksData.contents
    }
  }
}

const Home: NextPage = ({ worksData }: any) => {
  return (
    <Layout isHome={undefined}>
      <LargeContainer>

        blogs page

      </LargeContainer>
    </Layout>
  )
}

export default Home;