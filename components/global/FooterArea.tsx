import {
  Container,
  Box,
  Grid,
  GridItem,
  Center,
  Heading,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import Logo from '../../public/images/global/logo_yoko.svg'

const yyyy = new Date().getFullYear()

export default function FooterArea() {
  return (

    <Box bg='#1A365D' pt='1rem' fontSize='.9rem'>
      <Container py={3} maxW='container.lg' color='white'>

        <Grid templateColumns='repeat(4, 1fr)' gap={8} column='12' mb='1rem'>

          <GridItem w='100%' h='100%'>
            {/* <Logo /> */}
            <Box mb='1rem'>
              <small>神戸発・WEBよろづ屋</small>
              <Heading as='h1' size='lg'>ENTERSIGHT</Heading>
            </Box>
            <Box mb='1rem'>
              <Text fontWeight='bold' mb='.5rem'>会社情報：</Text>
              エンターサイト<br />
              神戸市中央区江戸町104
            </Box>
            <Box>
              <Text fontWeight='bold' mb='.5rem'>お支払い方法：</Text>
              ・カード決済（square）<br />
              ・銀行振込 （三菱東京UFJ銀行）<br />
              ※振込期日を守れないお客様は、以後取引をお断り致します。
            </Box>
          </GridItem>

          <GridItem w='100%' h='100%'>
            <Text fontWeight='bold' mb='.5rem'>SERVICES</Text>
            <List styleType='none'>
              <ListItem>JAM Stack Web Site</ListItem>
              <ListItem>Web / Graphic Design</ListItem>
              <ListItem>System Development</ListItem>
              <ListItem>Database Analysis</ListItem>
              <ListItem>API Platform</ListItem>
              <ListItem>more...</ListItem>
            </List>
          </GridItem>

          <GridItem w='100%' h='100%'>
            <Text fontWeight='bold' mb='.5rem'>PRODUCTS</Text>
            <List styleType='none'>
              <ListItem>
                <a href='https://tinywest.net'>tinyWEST</a>
              </ListItem>
              <ListItem>
                <a href='https://8beat.net'>8Beat</a>
              </ListItem>
            </List>
          </GridItem>

          <GridItem>
            <Text fontWeight='bold' mb='.5rem'>HOGE</Text>
          </GridItem>

        </Grid>

        <Center>
          @{ yyyy } entersight, All rights reserved.
        </Center>
      </Container>
    </Box>

  )
}