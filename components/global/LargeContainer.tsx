import { Container } from '@chakra-ui/react'

export default function LargeContainer ({children}) {
  return (
    <>
      <Container
        py={2}
        maxW='container.lg'
      >
        {children}
      </Container>
    </>
  )
}