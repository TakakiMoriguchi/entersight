import {
  HStack,
  Center,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import SectionTitle from '../global/SectionTitle'

import React, { useState, useEffect } from 'react'
import NextImage from 'next/image'
import style from '../../styles/components/skillArea.module.scss'

const language = [
  'css3',
  'express',
  'github',
  'golang',
  'html5',
  'illustrator',
  'javascript',
  'laravel',
  'mariadb',
  'markdown',
  'mysql',
  'next',
  'node',
  'nuxt',
  'pandas',
  'photoshop',
  'php',
  'postgresql',
  'python',
  'react',
  'reactrouter',
  'rust',
  'sass',
  'sketch',
  'typescript',
  'vue',
  'vuetify'
]

export default function SkillArea() {

  type langType = number[]
  const totalCount = 27
  const [lang, setLang] = useState<langType>([0, 1, 2, 3, 4, 5, 6])

  useEffect(() => {
    const interval = setInterval(() => {
      let langArray: number[] = Array()
      for(let i=0; langArray.length<7; i++){
        let randNum = Math.floor(Math.random() * totalCount)
        if(!langArray.includes(randNum)){
          langArray.push(randNum)
        }
      }
      setLang(langArray)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing={1}>
        <Box
          w='100%'
          p={5}
        >
          <Box display='block' h='100%' py='10rem'>
            <Center mb={["34.8px", "43.5px"]}>
              <HStack>
                <div className={style.first_hexagon_out}>
                  <div className={style.first_hexagon_inner}>
                    &nbsp;
                  </div>
                </div>
                <Honeycomb num={lang[0]} />
                <Honeycomb num={lang[1]} />
              </HStack>
            </Center>
            <Center mb={["34.8px", "43.5px"]}>
              <HStack>
                <Honeycomb num={lang[2]} />
                <Honeycomb num={lang[3]} />
              </HStack>
            </Center>
            <Center>
              <HStack>
                <Honeycomb num={lang[4]} />
                <Honeycomb num={lang[5]} />
                <Honeycomb num={lang[6]} />
              </HStack>
            </Center>
          </Box>
        </Box>

        <Box
          display='flex'
          alignItems='center'
        >
          <Box
            w='100%'
            p={5}
          >
            <SectionTitle
              arg="SKILLS"
              sub="We appreciate these languages ​​and techniques"
              align="right"
            />
          </Box>
        </Box>
      </SimpleGrid>

      {/* <Stack
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
          <Box display='block' h='100%' py='10rem'>
            <Center mb='58px'>
              <HStack>
                <div className={style.first_hexagon_out}>
                  <div className={style.first_hexagon_inner}>
                    &nbsp;
                  </div>
                </div>
                <Honeycomb num={lang[0]} />
                <Honeycomb num={lang[1]} />
              </HStack>
            </Center>
            <Center mb='58px'>
              <HStack>
                <Honeycomb num={lang[2]} />
                <Honeycomb num={lang[3]} />
              </HStack>
            </Center>
            <Center>
              <HStack>
                <Honeycomb num={lang[4]} />
                <Honeycomb num={lang[5]} />
                <Honeycomb num={lang[6]} />
              </HStack>
            </Center>
          </Box>

        </Box>

        <Box
          w='100%'
          p={5}
        >
          <SectionTitle
            arg="SKILLS"
            sub="We appreciate these languages ​​and techniques"
            align="right"
          />
        </Box>

      </Stack> */}
    </>
  )
}

function Honeycomb({ num }) {
  return(
    <>
      <div className={style.hexagon_out}>
        <div className={style.hexagon_inner}>
          <NextImage
            src={ '/images/skills/' + language[num] +'.svg' }
            layout='fill'
            className={style.hexagon_image}
          />
        </div>
      </div>
    </>
  )
}