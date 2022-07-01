import {
  Container,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
  Divider
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

import { AnimationList } from '../../../data/animationList'
import { AnimationChildren } from '../../../data/animationListChildren'

export default function Home() {
  return (
    <>
      <Container maxW='container.lg'>

        <Heading as='h3'>AnimationPage</Heading>

        <Box mb='2rem'>
          <Heading
            as='h6'
            size='lg'
            py={3}
            bg='tomato'
          >
            ・機能にかかわる動き
          </Heading>
          <Box py={3}>
            <Grid templateColumns='repeat(8, 1fr)' gap={3}>
              {AnimationList.fun.map((val, i) => (
                <AnimationListGridItem arg={ val } key={i} />
              ))}
            </Grid>
          </Box>
        </Box>

        <Box mb='2rem'>
          <Heading
            as='h6'
            size='lg'
            py={3}
            bg='tomato'
          >
            ・印象にかかわる動き
          </Heading>
          <Box py={3}>
            <Grid templateColumns='repeat(8, 1fr)' gap={3}>
              {AnimationList.imp.map((val, i) => (
                <AnimationListGridItem arg={ val } key={i} />
              ))}
            </Grid>
          </Box>
        </Box>

        <Divider mb={10} />

        <AnimationListBody />

      </Container>
    </>
  )
}

export function AnimationListBody() {
  return (
    <>
      {AnimationChildren.map((val, i) => (
        <>
          <Box mb={10}>
            <Heading
              as='h6'
              size='sm'
              id={val.tag}
            >{val.title}</Heading>
            <Box py={3}>
              <Grid templateColumns='repeat(8, 1fr)' gap={3}>
                  {val.data.map((value, j) => (
                    <>
                      <AnimationListGridBodyItem arg={value} key={j} />
                    </>
                  ))}
              </Grid>
            </Box>
          </Box>
        </>
      ))}
    </>
  )
}

export function AnimationListGridItem({ arg }) {
  return (
    <>
      <NextLink href={'#' + arg.tag }>
        <GridItem
          w='100%'
          p={4}
          border='1px solid #333'
          borderRadius={5}
        >
          <Image src={ '/images/presentation/animation/' + arg.path + '.svg' } width={arg.width} height={arg.height} alt={arg.name} />
          <Text
            fontSize='small'
            fontWeight='bold'
          >
            { arg.name }
          </Text>
        </GridItem>
      </NextLink>
    </>
  )
}

export function AnimationListGridBodyItem({ arg }) {
  console.log(arg)
  return (
    <>
      <NextLink
        href={'/presentation/animation/children/' + arg.path}
      >
        <GridItem
          w='100%'
          p={4}
          border='1px solid #333'
          borderRadius={5}
        >
          <Image src={ '/images/presentation/animation/' + arg.path + '.svg' } width={arg.width} height={arg.height} alt={arg.name} />
          <Text
            fontSize='small'
            fontWeight='bold'
          >
            { arg.name }
          </Text>
        </GridItem>
      </NextLink>
    </>
  )
}