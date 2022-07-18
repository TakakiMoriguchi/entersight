import {
  HStack,
  Center,
  Box,
  Stack,
  Text
} from '@chakra-ui/react'
import { styled } from '@chakra-ui/react'
import Image from 'next/image'
import SectionTitle from '../global/SectionTitle'
import style from '../../styles/components/skillArea.module.scss'

// skillsフォルダ以下のファイルをまとめて取得して配列にしたい
const language = [
  { "name": "html5", "path": "" },
  { "name": "css3", "path": "" },
  { "name": "javascript", "path": "" },
  { "name": "typescript", "path": "" },
  { "name": "php", "path": "" },
  { "name": "laravel", "path": "" },
  { "name": "python", "path": "/images/skills/python.svg" },
  { "name": "go", "path": "" },
  { "name": "rust", "path": "" },
  { "name": "photoshop", "path": "" },
  { "name": "html", "path": "" },
  { "name": "html", "path": "" },
  { "name": "html", "path": "" },
]

export default function SkillArea() {
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
          <Box display='block' h='100%' py='10rem'>
            <Center mb='58px'>
              <HStack>
                <div className={style.first_hexagon_out}>
                  <div className={style.first_hexagon_inner}>
                    &nbsp;
                  </div>
                </div>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    <img src='/images/skills/python.svg' width='100px' height='100px' />
                  </div>
                </div>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
              </HStack>
            </Center>
            <Center mb='58px'>
              <HStack>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
              </HStack>
            </Center>
            <Center>
              <HStack>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
                <div className={style.hexagon_out}>
                  <div className={style.hexagon_inner}>
                    テスト
                  </div>
                </div>
              </HStack>
            </Center>
          </Box>

        </Box>


        {/* RIGHT CONTENT */}
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

      </Stack>
    </>
  )
}