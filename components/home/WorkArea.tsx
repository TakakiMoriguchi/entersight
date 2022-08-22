import {
  Box,
  Stack,
  Text
} from "@chakra-ui/react"
import SectionTitle from '../global/SectionTitle'

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
          <SectionTitle
            arg="WORKS"
            sub="The best service we can provide"
            align="left"
          />
        </Box>

        <Box
          w='100%'
          p={5}
        >
          <Stack>
            { props.map((val) => (
              <Box p={2} key={val.id}>
                <Text fontWeight='bold'>{ val.title }</Text>
                <Text>{ val.subtitle }</Text>
              </Box>
            ))}
          </Stack>
        </Box>

      </Stack>
    </>
  )
}