import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import SectionTitle from '../global/SectionTitle'
import style from '../../styles/components/partnerArea.module.scss'

type PartnerType = {
  logo: string,
  name: string,
  detail: string,
  link: string
}

export default function PartnerArea() {

  const partners: any = [
    {
      logo: "images/partner/DigzLogo.jpg",
      name: "ディグダグズ株式会社",
      detail: "インフラ・ネットワーク構築",
      link: "https://digdugz.com/"
    },
    {
      logo: "images/partner/yumi_seino.jpg",
      name: "Yumi Seino",
      detail: "グラフィックデザイナー",
      link: ""
    },
  ]

  return(
    <Box
      height='70vh'
      fontSize='.85rem'
      lineHeight='1rem'
    >
      <Box py='1rem'>
        <SectionTitle
          arg="PARTNERS"
          sub="partner companies and creators"
          align="center"
        />
      </Box>
      <TableContainer>
        <Table variant='striped' colorScheme='gray' className={style.partnerArea}>

          <Thead>
            <Tr>
              <Th>Partners</Th>
            </Tr>
          </Thead>

          <Tbody w='100%'>
            { partners.map((val:PartnerType, index) => (
              <Tr key={index}>
                <Td>
                  <Image src={val.logo} width="240px" alt='partner_logo' />
                </Td>
                <Td>
                  <Text
                    display='flex'
                    fontWeight='bold'
                  >
                    { val.name }&nbsp;
                    {
                      val.link.length > 0 &&
                      <a className={style.partnerAreaLink} target="_blank">
                        <LinkIcon _hover={{ color: '#B02c33' }} pb='.1rem' />
                      </a>
                    }
                  </Text>
                  <Text>{ val.detail }</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>

          <Tbody>
            <Tr>
              <Td p='3%'>&nbsp;</Td>
              <Td>&nbsp;</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>ENTERSIGHTではパートナー企業を募集しております。 <br/>
                得意分野を相互補完し、顧客により良いサービスを提供しましょう。</Th>
            </Tr>
          </Tfoot>

        </Table>
      </TableContainer>
    </Box>
  )
}