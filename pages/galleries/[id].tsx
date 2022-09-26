import { client } from "../../libs/client"

import type { NextPage } from "next"
import { SimpleGrid } from "@chakra-ui/react"
import { Key, useState } from "react"

import Layout from "../../components/layout/Layout"
import LargeContainer from "../../components/global/LargeContainer"
import GalleryGridItem from "../../components/gallery/GalleryGridItem"
import GalleryModal from "../../components/gallery/GalleryModal"
// import { Pagination } from "../../components/global/Pagenation"

const PER_PAGE = 2

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "galleries" })
  const pageNumbers = []
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (number) => `/galleries/${number}`
  )
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: "galleries",
    queries: {
      offset: (id - 1) * PER_PAGE,
      limit: 2,
    },
  })

  return {
    props: {
      galleryData: data.contents,
      totalCount: data.totalCount,
    },
  }
}

const Id: NextPage = ({ galleryData, totalCount }: any) => {
  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        <article>
          <SimpleGrid
            as='ul'
            columns={[2, 3, 4]}
            spacing={6}
            listStyleType='none'
            py={{ base: "30px", md: "60px" }}
          >
            {galleryData.map((gallery: { id: Key }) => (
              <GalleryContent props={gallery} key={gallery.id} />
            ))}
          </SimpleGrid>
        </article>

        {/* <Pagination
          totalCount={totalCount}
          PER_PAGE={2}
          props={handlePagenation}
        /> */}
      </LargeContainer>
    </Layout>
  )
}

export function GalleryContent({ props }) {
  const [show, setShow] = useState<boolean>(false)
  const openModal = () => {
    setShow(true)
  }
  return (
    <li>
      <GalleryGridItem onClick={openModal} props={props} />
      <GalleryModal show={show} setShow={setShow} props={props} />
    </li>
  )
}

export default Id
