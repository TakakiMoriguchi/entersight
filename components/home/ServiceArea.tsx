import {
  Box,
  Stack,
  StylesProvider,
  Text
} from "@chakra-ui/react"
import SectionTitle from '../global/SectionTitle'
import style from '../../styles/components/partnerArea.module.scss'
import Link from 'next/link'

export default function ServiceArea() {

  const Service = [
    {
      id:"1",
      title: "tinyWEST",
      sub_title: "スマホの修理を行います。",
      link:"https://www.tinywest.net/"
    },
    {
      id:"2",
      title: "8beat",
      sub_title: "バンドマン向けのデザインを作成します。",
      link:"https://www.8beat.net/"
    },
  ]

  return (
    <>
      <Stack
        direction={['column', 'row']}
        spacing='1rem'
        display='flex'
        alignItems='center'
        height='80vh'
      >
        <Box
          w='100%'
          p={5}
        >
          <SectionTitle
            arg="Service"
            sub="our service"
            align="left"
          />
        </Box>

        <Box
          w='100%'
          p={5}
        >
          <Stack>
            { Service.map((val) => (
              <Box p={2} key={val.id}>
                <Link href={val.link}>
                  <a className={style.serviceArea} target="_blank">
                    <Text suppressHydrationWarning 
                      fontWeight='bold'
                      _hover={{ color: '#B02c33' }}
                    >
                      { val.title }
                    </Text>
                  </a>
                </Link>
                <Text>{ val.sub_title }</Text>
              </Box>
            ))}
          </Stack>
        </Box>

      </Stack>
    </>
  )
}