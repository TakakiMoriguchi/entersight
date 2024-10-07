import Image from "next/image";

const consulting_data = [
  {
    name: "Google Business Profile",
    description: `
      Google Mapに対応したMap Engine Optimization（マップ検索エンジン最適化）のコンサルティングを行います。<br />
      ビジネスの登録、マップの設定、サムネイルの撮影、各種設定などサポートを行います。<br />
      またユーザーレビューの返し方など、ビジネスの評価の対策などもお伝えします。
    `,
    thumbnail: "/consulting/google_my_business.png",
    price: "",
  },
  {
    name: "Line Business",
    description: `
      Line Businessに対応したコンサルティングを行います。<br />
      オフィシャルアカウントの作成、設定など基本的なサポートからLステップなども対応します。<br />
      Lステップを導入すれば、顧客の行動に合わせたメッセージ送信や最適な情報提供、顧客管理を行うことができます。
    `,
    thumbnail: "/consulting/line_business.png",
    price: "",
  },
  {
    name: "Base",
    description: `
      Baseとは、オンラインショップを構築するためのWEBサービスです。<br />
      ショップの構築、商品の登録、カテゴリの設定、カートの設定、決済の設定などサポートします。<br />
      また、ショップの売上を上げるためのご相談も承ります。
    `,
    thumbnail: "/consulting/base.png",
    price: "",
  },
  {
    name: "Shopify",
    description: `
      Shopifyとは、オンラインショップを構築するためのWEBサービスです。<br />
      ショップの構築、商品の登録、カテゴリの設定、カートの設定、決済の設定などサポートします。<br />
      また、ショップの売上を上げるためのご相談も承ります。
    `,
    thumbnail: "/consulting/shopify.png",
    price: "",
  }
]

export default function Consulting() {
  return (
    <>
      <div>
        <h3>Consulting</h3>
        <div>
          <p>各社のWEBサービスを使用したDX推進のコンサルティングを行います。</p>
          <p>具体的にはサービスの設定、保守、WEBマーケティング手法の提供などサポートします。</p>
          <p>パソコンやスマホでどんな業務改善ができるのか、といった提案ベースも可能です。</p>
        </div>

        <div>
          {consulting_data.map((v, i) => (
            <div key={i}>
              <Image src={v.thumbnail} alt={v.name} width={100} height={100} />
              <div>{v.name}</div>
              <div dangerouslySetInnerHTML={{ __html: v.description }} />
              <div>{v.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
