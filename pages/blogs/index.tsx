import type { NextPage } from 'next'
import {
  Box,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import LargeContainer from '../../components/global/LargeContainer'
import { client } from "../../libs/client";
import style from '../../styles/pages/blogsList.module.scss'


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogsData = await client.get({
    endpoint: "blogs",
    queries: { limit: 10 }
  })

  return {
    props: {
      blogsData: blogsData.contents
    }
  }
}

function formatDate(dt: Date) {
  let date = new Date(dt)
  var y = date.getFullYear()
  var m = ('00' + (date.getMonth()+1)).slice(-2)
  var d = ('00' + date.getDate()).slice(-2)
  return (y + '/' + m + '/' + d)
}

const Home: NextPage = ({blogsData} : any) => {
  return (
    <Layout isHome={undefined}>
      <LargeContainer>
          
          <Box className={style.pc}>
            <BlogListForpc props={blogsData} />
          </Box>
          
          <Box className={style.sp}>
            <BlogListForsp props={blogsData}/>
          </Box>

      </LargeContainer>
    </Layout>
  );
};


export function BlogListForpc ({props}) {
  return (
    <>
      { props.map  ((val:any) => (
        <Box
          key={ val.id }
          display='flex'
          my='8'
        >
          <Text
            bg='black'
            color='azure'
            px='2'
            py='0.5'
          >
            { val.category }
          </Text>
          <Text
            ml='10'
            py='0.5'
          >
            publishedAt&nbsp;{ formatDate( val.publishedAt ) }
          </Text>
          <Text
            ml='10'
            py='0.5'
          >
            { val.title }
          </Text>
        </Box>
      ))}
    </>
  )
}

export function BlogListForsp ({props} : any) {
  return (
    <>
     { props.map  ((val:any) => (
        <Box
          key={ val.id }
          mb='10'
        >
          <Box
            display='flex'
            my='3'
          >
            <Text
              bg='black'
              color='azure'
              px='2'
              py='0.5'
            >
              { val.category  }
            </Text>
            <Text
                ml='5'
                py='0.5'
            >
              publishedAt&nbsp;{ formatDate( val.publishedAt ) }
            </Text>
          </Box>
          <Text
            ml='2'
            my='3'
          >
            { val.title }
          </Text>
        </Box>
      ))}
    </>
  )
}


export default Home;