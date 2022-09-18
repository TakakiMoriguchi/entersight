
import {
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react"
import Link from "next/link"
import LargeContainer from "../../components/global/LargeContainer"
import Layout from "../../components/layout/Layout"
import { client } from "../../libs/client"
import React from "react"
import Pagination from "../../components/global/Pagenation"

export default function Blogs({ blogData, totalCountData }) {
  const PER_PAGE = 5
  const categories = [
    "All",
    "About",
    "Technology",
    "Design",
    "Programming",
    "Others"
  ]

  const [totalCount, setTotalCount] = React.useState(totalCountData)

  const [dummyBlogData, setDummy] = React.useState(blogData)

  const [currentPageBlogData, setCurrentPage] = React.useState(
    blogData.slice(0, PER_PAGE)
  )

  React.useEffect(() => {
    const currentPage = dummyBlogData.slice(0, 0 + PER_PAGE)
    setCurrentPage(currentPage)
  }, [dummyBlogData])

  const changeCurrentPage = (e) => {
    const page = e.target.textContent
    const first = PER_PAGE * (page - 1)
    const currentPage = dummyBlogData.slice(first, first + PER_PAGE)
    setCurrentPage(currentPage)
  }

  const changeCurrentCategory = (e) => {
    const category = e.target.value
    if (category === "All") {
      setDummy(blogData)
      setTotalCount(blogData.totalCount);
    } else {
      const currentCategory = blogData.filter((item) => {
        return item.category[0] === category;
      });
      setDummy(currentCategory);
      setTotalCount(currentCategory.length);
    }
  };

  const tabSetup = () => {
    const items = [];
    for (let i = 0; i < categories.length; i++) {
      items.push(
        <Tab key={i} value={categories[i]} onClick={changeCurrentCategory}>
          {categories[i]}
        </Tab>
      );
    }
    return <TabList mb="1em">{items}</TabList>;
  };

  const formatDate = (value: any) => {
    const weekData = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dummyDate = new Date(value).toLocaleDateString();
    const date = String(dummyDate).split("/").join("-");
    const dateArr = String(date).split("-");
    const mdy = dateArr[2] + "/" + dateArr[0] + "/" + dateArr[1];
    const week = weekData[new Date(mdy).getDay()];
    return date + "(" + week + ")";
  };

  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs isFitted>{tabSetup()}</Tabs>
        </Box>
        <List spacing={16} py="16" height="800px">
          {currentPageBlogData.map((blog) => (
            <ListItem key={blog.id} cursor="pointer" display={"inline-block"}>
              <Link href={`/blogs/${blog.id}`}>
                <Flex alignItems="center">
                  <Text
                    textAlign={"center"}
                    py="1"
                    w="120px"
                    bg="black"
                    color="white"
                    fontSize="md"
                  >
                    {blog.category}
                  </Text>

                  <Text fontSize="md" mx="14">
                    {formatDate(blog.createdAt)}
                  </Text>
                  <Text fontSize="2xl">{blog.title}</Text>
                </Flex>
              </Link>
            </ListItem>
          ))}
        </List>
        <Pagination
          totalCount={totalCount}
          PER_PAGE={PER_PAGE}
          props={changeCurrentPage}
        />
      </LargeContainer>
    </Layout>
  );
}

export const getMicroCMSData = async (limit = 10, offset = 0) => {
  let data = await client.get({
    endpoint: "blogs",
    queries: {
      offset,
      limit,
    },
  });
  return data;
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const data = await getMicroCMSData();
  let contents = [];
  if (data.limit < data.totalCount) {
    for (let i = 0; i < Math.ceil(data.totalCount / data.limit); i++) {
      const c = await getMicroCMSData(data.limit, data.limit * i);
      c.contents.map((value) => {
        contents.push(value);
      });
    }
  } else {
    contents = data.contents;
  }

  return {
    props: {
      blogData: contents,
      totalCountData: data.totalCount,
    },
  };
};