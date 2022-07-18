import {
  Heading,
  Text,
  Box
} from '@chakra-ui/react'

export default function SectionTitle ({arg, sub, align}) {
  return (
    <>
      <Box textAlign={align}>
        <Heading as='h3' size='md'>{ arg }</Heading>
        <Text fontSize='xs'>{ sub }</Text>
      </Box>
    </>
  )
}