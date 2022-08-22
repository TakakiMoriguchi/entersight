import { Heading, Text, Box } from "@chakra-ui/react";
import { client } from "../../libs/client";

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
    <>
    <Box
      p='5'
    >
      <Heading>{blogData.title}</Heading>
      <Text
        fontSize='.85rem'
      >
        { formatDate(blogData.publishedAt)}
      </Text>
      <Text
        fontSize='.85rem'
      >
        {blogData.category}
      </Text>
      <Text
        py='5'
      >{blogData.content.replace(/(<([^>]+)>)/gi, '') }</Text>
    </Box>
    </>
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