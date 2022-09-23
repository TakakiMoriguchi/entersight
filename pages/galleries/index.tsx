import { client } from "../../libs/client"

import { Key, useState } from "react"
import type { NextPage } from "next"
import { SimpleGrid } from "@chakra-ui/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Layout from "../../components/layout/Layout"
import LargeContainer from "../../components/global/LargeContainer"
import GalleryGridItem from "../../components/gallery/GalleryGridItem"
import GalleryModal from "../../components/gallery/GalleryModal"

export const getStaticProps = async () => {
  const galleryData = await client.get({
    endpoint: "galleries",
    queries: { limit: 12 },
  })

  return {
    props: {
      galleryData: galleryData.contents,
    },
  }
}

const Home: NextPage = ({ galleryData }: any) => {
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

export default Home
