import { Card } from "@/components/Card";
import ChildPage from "@/components/ChildPage";
import { Information } from "@/components/Information";

const consulting_data = [
  {
    category: 3,
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
    category: 3,
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
    category: 3,
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
    category: 3,
    name: "Shopify",
    description: `
      Shopifyとは、オンラインショップを構築するためのWEBサービスです。<br />
      ショップの構築、商品の登録、カテゴリの設定、カートの設定、決済の設定などサポートします。<br />
      また、ショップの売上を上げるためのご相談も承ります。
    `,
    thumbnail: "/consulting/shopify.png",
    price: "",
  },
  {
    category: 3,
    name: "baserCMS",
    description: `
      導入検討中
    `,
    thumbnail: "/consulting/baser_cms.png",
    price: "",
  }
]

export default function Consulting() {
  return (
    <ChildPage>
      <Information
        title="Consulting"
        description={[
          "各社のWEBサービスを使用したDX推進のコンサルティングを行います。",
          "具体的にはサービスの設定、保守、WEBマーケティング手法の提供などサポートします。",
          "パソコンやスマホでどんな業務改善ができるのか、といった提案ベースも可能です。"
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consulting_data.map((v, i) => (
          <Card key={i} {...v} />
        ))}
      </div>
    </ChildPage>
  );
}
