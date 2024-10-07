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
    thumbnail: "/consulting/line.png",
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
      <div className="container">
        <h3>Consulting</h3>
        <div>
          <p>各社のWEBサービスを使用したDX推進のコンサルティングを行います。</p>
          <p>具体的にはサービスの設定、保守、WEBマーケティング手法の提供などサポートします。</p>
          <p>パソコンやスマホでどんな業務改善ができるのか、といった提案ベースも可能です。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consulting_data.map((v, i) => (
            <div key={i} className="border border-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src={v.thumbnail}
                  alt={v.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{v.name}</h4>
              <div className="flex-grow" dangerouslySetInnerHTML={{ __html: v.description }} />
              {v.price && <div className="mt-4 font-bold">{v.price}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
