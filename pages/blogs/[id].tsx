import { Heading, Text, Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import { relative } from "path";
import { rootCertificates } from "tls";
import LargeContainer from "../../components/global/LargeContainer";
import Layout from "../../components/layout/Layout";
import { client } from "../../libs/client";
import style from '../../styles/blogid.module.scss'
import Image from 'next/image'


function formatDate(dt: Date) {
  let date = new Date(dt)
  var y = date.getFullYear()
  var m = ('00' + (date.getMonth()+1)).slice(-2)
  var d = ('00' + date.getDate()).slice(-2)
  return (y + '/' + m + '/' + d)
}

export default function BlogId({ blogData }) {

  console.log(getStaticProps)

  return (
    <Layout isHome={undefined}>
      
      <LargeContainer>
        <Box
          display='flex'
          justifyContent='center'
        >
          <Box
            display='inline-block'
            bg='white'
            w='75%'
            lineHeight='2rem'
            mb='5'
            mr='5'
          >
            <Heading>
              {blogData.title}
            </Heading>
            <Text
              py='5'
              lineHeight='2rem'
            >
              {blogData.content.replace(/(<([^>]+)>)/gi, '') }
            </Text>
            <Text
              fontSize='.85rem'
              mb='-1.5'
            >
              category{blogData.category}
            </Text>
            <Text
              fontSize='.85rem'
              pb='5'
            >
              publishedAt&nbsp;{ formatDate(blogData.publishedAt)}
            </Text>
          </Box>
          <Box
            bgImage="url('https://picsum.photos/200/800')"
            ml='3'
            w='20%'
            h='auto'  
            position='relative'
          >
            <Link href='https://picsum.photos'>
              <a>
                <Text className={style.blogid}
                  position='absolute'
                  color='azure'
                >
                  https://picsum.photos
                </Text>
              </a>
            </Link>
          </Box>
        </Box>
      </LargeContainer>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content:any) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogData: data,
    },
  };
};