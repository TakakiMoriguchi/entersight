import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import HeroArea from '../home/HeroArea'
import ChildHeader from '../global/ChildHeader'
import FooterArea from '../global/FooterArea'

const title = 'エンターサイト - 神戸発・WEB制作よろづ屋'
const description = 'グラフィック・WEBデザイン、HPや大規模システム開発までトータルサポート。まずはWORKリストをご確認ください。'

export default function Layout({isHome, children}) {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        isHome ? (
          <>
            {/* for index page */}
            <HeroArea />
          </>
        ) : (
          <>
            {/* for child page */}
            <ChildHeader />
          </>
        )
      }

      <main>
        { children }
      </main>

      <FooterArea />
    </>
  )
}