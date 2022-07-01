import {
  Container,
  Heading
} from '@chakra-ui/react'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Container>
        <Heading
          as='h3'
        >
          presentation page
        </Heading>

        <Link href='/presentation/animation'>AnimationSample</Link>
      </Container>
    </>
  )
}