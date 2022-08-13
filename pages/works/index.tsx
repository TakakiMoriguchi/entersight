import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Link from 'next/link';
import Layout from '../../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;