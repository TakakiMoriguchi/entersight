import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Heading
} from "@chakra-ui/react"
import Link from "next/link"
import SectionTitle from '../global/SectionTitle'

export default function BlogArea ({ props }) {

  return (
    <Box height={['100vh', '70vh']}>

      <Box
        py='4rem'
      >
        <Link href="/blogs">
          <a>
            <SectionTitle
              arg="BLOG"
              sub="We are always on the cutting edge of technology."
              align="center"
            />
          </a>
        </Link>
      </Box>

      <SimpleGrid
        columns={[2, 2, 3, 4]}
        spacing={3}
        height='100%'
      >
        { props.map  ((val:any) => (

          <Link
            href={`/blogs/${val.id}`}
            key={val.id}
          >
            <a>
              <Box
                boxShadow='1px 1px 1px gray'
                borderRadius='5'
                _hover={{ boxShadow: '2px 2px 2px gray' }}
              >
                <Box
                  p='3'
                  borderTopRadius='5'
                  bgImg={ val.thumbnail.url }
                  bgPosition='center'
                  bgSize='cover'
                  color='white'
                  minHeight='150px'
                  textShadow='1px 1px 2px black'
                >
                  <Box>
                    <Text fontSize='.75rem'>{ val.createdAt.substr(0, 10) }</Text>
                    <Heading size='xs'>{ val.title }</Heading>
                  </Box>
                </Box>

                <Text
                  bg='#1a365d'
                  color='white'
                  borderBottomRightRadius='15'
                  display='inline-block'
                  mt='3'
                  py='1'
                  px='5'
                  fontSize='.75rem'
                >{ val.category }</Text>

                <Box
                  fontSize='.85rem'
                  p='4'
                  noOfLines={[3, 4, 5]}
                >
                  { val.content.replace(/(<([^>]+)>)/gi, '') }
                </Box>

              </Box>
            </a>
          </Link>

        ))}
      </SimpleGrid>
    </Box>
  )
}