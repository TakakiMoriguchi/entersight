import {
  Box,
  Container,
  Center
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import LargeContainer from './LargeContainer'
import style from '../../styles/components/childHeader.module.scss'

export default function ChildHeader() {
  return(
    <>
      {/* <Box className={style.childHeaderWrap}> */}
      <Box>
        <LargeContainer>
          <Center>
            <Link href="/">
              <a>
                <Image src="/images/global/logo_yoko.svg" width="320px" height="80px" alt="logo" />
              </a>
            </Link>
          </Center>
        </LargeContainer>
      </Box>
    </>
  )
}