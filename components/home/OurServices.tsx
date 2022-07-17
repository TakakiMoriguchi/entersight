const WorkApi = [
  {
    date: "2022-07-18",
    title: "JAMstackブログ構築",
    sub_title: "最先端技術を使用した、高速なWEBサイトを構築します。"
  }
]

export default function OurServices() {

  return (
    <>
      { WorkApi[0].date }<br />
      { WorkApi[0].title }<br />
      { WorkApi[0].sub_title }
    </>
  )
}