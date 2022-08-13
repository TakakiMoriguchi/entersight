import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import SectionTitle from '../global/SectionTitle'
import style from '../../styles/components/partnerArea.module.scss'


export default function PartnerArea() {


  const partners: any = [
    {
      logo: "<Image src='images/partner/DigzLogo.jpg'>",
      name: "ディグダグズ株式会社",
      detail: "インフラ・ネットワーク構築",
      link: "https://digdugz.com/",
      icon: ""
    },
    {
      logo: "<h1> YumiSeino </h1>",
      name: "Yumi Seino",
      detail: "グラフィックデザイナー",
      link: "",
      icon: "",
    },
  ]

  return(
    <Box
      py='5rem'
      fontSize='0.85rem'
      lineHeight='1rem'
    >
      <Box
        py='1rem'
      >
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
          <Tbody
            w='100%'
          >
            { partners.map  ((val:any) => (
              <>
                <Tr>
                  <Td
                    dangerouslySetInnerHTML={{
                      __html: val.logo
                    }} 
                    fontSize='24px'
                    fontWeight='bold'
                  />
                  <Td
                  lineHeight='0.75rem'
                  >
                    <Box
                      display='flex'
                    >
                      <Text
                        fontWeight='bold'
                      >
                        { val.name }&nbsp;&nbsp;
                      </Text>
                      <Link href={val.link}
                        
                      >
                        <a className={style.partnerAreaLink} target="_blank"> { val.link.length > 0 && <LinkIcon _hover={{ color: '#B02c33' }}/> } </a>
                      </Link>
                    </Box>
                    <br/>
                    <Text>
                      { val.detail }
                    </Text>
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
          <Tbody>
            <Tr>
              <Td
                p='3%'
              >　　　</Td>
              <Td>　　　</Td>
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