import {
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react"
import Link from "next/link"
import SectionTitle from '../global/SectionTitle'

function formatDate(dt: Date) {
  let date = new Date(dt)
  var y = date.getFullYear()
  var m = ('00' + (date.getMonth()+1)).slice(-2)
  var d = ('00' + date.getDate()).slice(-2)
  return (y + '/' + m + '/' + d)
}

export default function BlogArea ({ props }) {

  return (
    <>
      <Box
        py='1rem'
      >
        <SectionTitle
          arg="BROG"
          sub="We are always on the cutting edge of technology."
          align="center"
        />
      </Box>

      <SimpleGrid
        columns={[2, 2, 3, 4]}
        spacing={[5]}
        alignItems='center'
        justifyItems='center'
      >
        { props.map  ((val:any) => (
          <Box key={val.id}>
            <Link href={`/blogs/${val.id}`}>
              <a>
                <Box
                h={['250px', '300px', '350px']}
                m='2'
                boxShadow='1px 1px 5px gray'
                borderRadius='5'
                _hover={{ boxShadow: '3px 3px 10px gray' }}
              >
                <Box
                  p='5'
                  pl='4'
                  bgImg={ val.thumbnail.url }
                  bgPosition='center'
                  bgSize='cover'
                  color='white'
                  h='45%'
                  borderTopRadius='5'
                >
                  <Box
                    position='relative'
                    top={['40px','60px','80px']}
                  >
                    <Text
                      fontSize='.75rem'
                      textShadow='.5px .5px .5px #080808'
                    >{ formatDate(val.createdAt) }</Text>
                    <Text
                      fontWeight='bold'
                      fontSize='.85rem'
                      whiteSpace='nowrap'
                      textShadow='.75px .75px .75px #080808'
                    >{ val.title }</Text>
                  </Box>
                </Box>
                <Box
                  h='55%'
                >
                  <Text
                    bg='#1a365d'
                    color='azure'
                    borderBottomRightRadius='15'
                    display='inline-block'
                    p='1'
                    pl='5'
                    pr='5'
                    mt='2'
                    fontSize='.75rem'
                  >
                    <span>
                    { val.category }
                    </span>
                  </Text>
                  <Box
                    fontSize='.85rem'
                    m='4'
                    noOfLines={[3,4,5]}
                  >
                    { val.content.replace(/(<([^>]+)>)/gi, '') }
                  </Box>
                </Box>
              </Box>
              </a>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}