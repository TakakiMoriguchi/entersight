import {
  Box,
  Stack,
  Text
} from "@chakra-ui/react"
import SectionTitle from '../global/SectionTitle'
import Link from 'next/link'

export default function OurServices({ props }) {

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
          <Link href="/works">
            <a>
              <SectionTitle
                arg="WORKS"
                sub="The best service we can provide"
                align="left"
              />
            </a>
          </Link>
        </Box>

        <Box
          w='100%'
          p={5}
        >
          <Stack>
            { props.map((val) => (
              <Link href={'/works/'+val.id}>
                <a>
                  <Box p={2} key={val.id}>
                    <Text fontWeight='bold'>{ val.title }</Text>
                    <Text>{ val.subtitle }</Text>
                  </Box>
                </a>
              </Link>
            ))}
          </Stack>
        </Box>

      </Stack>
    </>
  )
}