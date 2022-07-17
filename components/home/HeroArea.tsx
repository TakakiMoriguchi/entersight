import {
  Container,
  Heading,
  styled
} from '@chakra-ui/react'
import style from '../../styles/components/heroArea.module.scss'

export default function HeroArea() {
  return(
    <>
      <Container className={style.heroArea}>
        <Heading as='h1' size='lg'>ENTERSIGHT</Heading>
        <Heading as='h2' size='xs'>Software Development Company from Kobe.</Heading>
      </Container>
    </>
  )
}