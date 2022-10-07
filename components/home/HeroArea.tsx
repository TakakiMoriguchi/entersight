import {
  Container,
  Heading,
  Box
} from '@chakra-ui/react'
import style from '../../styles/components/heroArea.module.scss'
import LargeContainer from '../global/LargeContainer'

export default function HeroArea() {
  return(
    <>
      <LargeContainer>
        <Box
          px={[3, 100]}
          position='relative'
          top='320px'
          className={style.heroArea}
        >
          <Heading as='h1' size='lg'>ENTERSIGHT</Heading>
          <Heading as='h2' size='xs'>Software Development Company from Kobe.</Heading>
        </Box>
      </LargeContainer>
    </>
  )
}