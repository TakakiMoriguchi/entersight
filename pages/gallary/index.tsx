import { client } from "../../libs/client";

import { Key, useState } from "react";
import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Layout from "../../components/layout/Layout";
import LargeContainer from "../../components/global/LargeContainer";
import GalleryGridItem from "../../components/gallery/GalleryGridItem";
import GalleryModal from "../../components/gallery/GalleryModal";

export const getStaticProps = async () => {
  const galleryData = await client.get({
    endpoint: "gallaries",
    queries: { limit: 12 },
  });

  return {
    props: {
      galleryData: galleryData.contents,
    },
  };
};

const Home: NextPage = ({ galleryData }: any) => {
  return (
    <Layout isHome={undefined}>
      <LargeContainer>
        <article>
          <GalleryItemStyle />

          <SimpleGrid
            as="ul"
            columns={[2, 3, 4]}
            spacing={6}
            listStyleType="none"
            py={{ base: "30px", md: "60px" }}
          >
            {galleryData.map((gallery: { id: Key }) => (
              <GalleryContent props={gallery} key={gallery.id} />
            ))}
          </SimpleGrid>
        </article>
      </LargeContainer>
    </Layout>
  );
};

export function GalleryContent({ props }) {
  const [show, setShow] = useState<boolean>(false);
  const openModal = () => {
    setShow(true);
  };
  return (
    <li>
      <GalleryGridItem onClick={openModal} props={props} />
      <GalleryModal show={show} setShow={setShow} props={props} />
    </li>
  );
}

export function GalleryItemStyle() {
  return (
    <Global
      styles={`
        .grid-imgWrap {
          aspect-ratio: 6 / 5;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }

        .grid-title {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .modal-imgWrap {
          aspect-ratio: 3 / 2;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .swiper-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0 2em;
        }

        .swiper {
          height: 100%;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 15px;
          height: 15px;
          border-top: 1px solid #333;

          &::after {
            display: none;
          }
        }

        .swiper-button-next{
          border-right: 1px solid #333;
          transform: rotate(45deg);
          right: -12px;

          @media screen and (min-width: 48em) {
            right: 0;
          }
        }

        .swiper-button-prev {
          border-left: 1px solid #333;
          transform: rotate(-45deg);
          left: -12px;

          @media screen and (min-width: 48em) {
            left: 0;
          }
        }
      `}
    />
  );
}

export default Home;
