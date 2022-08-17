import type { NextPage } from 'next'
import {
  Box,
  Container
} from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'

const Home: NextPage = () => {
  return (
    <Layout isHome={undefined}>

      <LargeContainer>
        <Box>
          <ul>
            <li>
              <Link href="/works/1">
                <a>ID:1のブログページ</a>
              </Link>
            </li>
            <li>
              <Link href="/works/2">
                <a>ID:2のブログページ</a>
              </Link>
            </li>
            <li>
              <Link href="/works/3">
                <a>ID:3のブログページ</a>
              </Link>
            </li>
          </ul>
        </Box>

      </LargeContainer>
    </Layout>
  );
};

export default Home;