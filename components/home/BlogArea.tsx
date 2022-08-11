import { 
  Box, 
  Text,
  SimpleGrid 
} from "@chakra-ui/react"
import SectionTitle from '../global/SectionTitle'

export default function BlogArea () {

  function formatDate(dt:any) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '/' + m + '/' + d);
  }
  
  const blogApi: any = {
      "data": [
        {
          id: 1,
          attributes: {
            title: "my first blog",
            description: "#### hello world!\nIm Takaki Moriguchi\nI borned Japan in 1989\nI can design and programming\nrecently I focus **DB** analysis",
            createdAt: "2020-11-27T15:30:00.000Z",
            category: {"id": "1", "name": "Technology"},
            thumbnail: "https://picsum.photos/600/400"
          },
          meta: {
            availableLocales: []
          }
        },
        {
          id: 2,
          attributes: {
            title: "my second blog",
            description: "\t\t\t\t<ul>\n\t\t\t\t   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n\t\t\t\t   <li>Aliquam tincidunt mauris eu risus.</li>\n\t\t\t\t   <li>Vestibulum auctor dapibus neque.</li>\n\t\t\t\t</ul>.replace(/(<([^>]+)>)/gi, '')",
            createdAt: "2020-12-09T15:30:00.000Z",
            category: {"id": "3", "name": "analysis"},
            thumbnail: "https://picsum.photos/600/400"
          },
          meta: {
            "availableLocales": []
          }
        },
        {
          id: 3,
          attributes: {
            title: "my third blog ",
            description: "#### hello world!\nIm Takaki Moriguchi\nI borned Japan in 1989\nI can design and programming\nrecently I focus **DB** analysis",
            createdAt: "2020-12-13T15:30:00.000Z",
            category: {"id": "2", "name": "design"},
            thumbnail: "https://picsum.photos/600/400"
          },
          meta: {
            availableLocales: []
          }
        },
        {
          id: 4,
          attributes: {
            title:  "my force blog",
            description: "\t\t\t\t<ul>\n\t\t\t\t   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n\t\t\t\t   <li>Aliquam tincidunt mauris eu risus.</li>\n\t\t\t\t   <li>Vestibulum auctor dapibus neque.</li>\n\t\t\t\t</ul>",
            createdAt: "2020-12-21T15:30:00.000Z",
            category: {"id": "2", "name": "design"},
            thumbnail: "https://picsum.photos/600/400"
          },
          meta: {
            "availableLocales": []
          }
        },
        
      ],
      "meta": {}
    }  


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
      <SimpleGrid columns={[2, 3, 4]} spacing={[5]}> 
        { blogApi.data.map  ((val:any) => (
          <>
            <Box 
              w='100%' 
              h={['250px', '300px', '350px']}
              m='2'
              boxShadow='1px 1px 5px gray'
              borderRadius='5'
              >
              <Box key={val.id}
                p='5'
                pl='4'
                bgImg={ val.attributes.thumbnail }
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
                  >{ formatDate(new Date(val.attributes.createdAt)) }</Text>
                  <Text
                    fontWeight='bold'
                  >{ val.attributes.title }</Text>
                </Box>
              </Box>
              <Box
                h='55%'
              >
                <Text
                  bg='cyan.500'
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
                   { val.attributes.category.name }
                  </span>
                </Text>
                <Box 
                  fontSize='.85rem'
                  m='4'
                  noOfLines={[3,4,5]} 
                >
                  { val.attributes.description.replace(/(<([^>]+)>)/gi, '') }
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  )
}