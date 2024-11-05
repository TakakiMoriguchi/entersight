import { Card } from "@/components/Card";
import ChildPage from "@/components/ChildPage";
import { Information } from "@/components/Information";

// export enum WorkType {
//   DEVELOPMENT = 1,
//   WEB_DESIGN = 2,
// }

const development_data = [
  {
    category: 1,
    work_type: 1,
    name: "システム設計",
    description: "システムの要件定義、設計を行います。",
    thumbnail: "/development/system_design.png",
    price: "",
  },
  {
    category: 1,
    work_type: 1,
    name: "データベース設計",
    description: "データベースの設計を行います。",
    thumbnail: "/development/database.png",
    price: "",
  },
  {
    category: 1,
    work_type: 1,
    name: "React開発",
    description: "Reactを用いて、フロントエンド開発を行います。",
    thumbnail: "/development/react.png",
    price: "",
  },
  {
    category: 1,
    work_type: 1,
    name: "Next.js開発",
    description: "Next.jsを用いて、フロントエンド開発を行います。",
    thumbnail: "/development/nextjs.png",
    price: "",
  },
  {
    category: 1,
    work_type: 1,
    name: "Python開発",
    description: "Pythonを用いて、API開発を行います。",
    thumbnail: "/development/python.png",
    price: "",
  },
  {
    category: 1,
    work_type: 1,
    name: "Go開発",
    description: "Goを用いて、API開発を行います。",
    thumbnail: "/development/go.png",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "UI/UXデザイン",
    description: "UI/UXデザインを行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "WEBデザイン",
    description: "web designを行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "POP作成",
    description: "POPの作成を行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "バナー作成",
    description: "バナーの作成を行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "フライヤー作成",
    description: "フライヤーの作成を行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "パンフレット作成",
    description: "パンフレットの作成を行います。",
    thumbnail: "",
    price: "",
  },
  {
    category: 2,
    work_type: 2,
    name: "パッケージデザイン",
    description: "パッケージのデザインを行います。",
    thumbnail: "",
    price: "",
  },
]

export default function Development() {
  return (
  <ChildPage>
    <Information
      title="Development"
      description={[
        "開発のご相談を承ります。",
        "データベース設計、フロントエンド開発、バックエンド開発",
        "デザインのご相談も承ります。",
        "web design、POP作成、バナー作成、フライヤー作成、パンフレット作成、パッケージデザインなどを行います。"
        ]}
      />
      <div className="mb-8">
        <h2 className="mb-4">開発</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {development_data.filter(v => v.work_type === 1).map((v, i) => (
            <Card key={i} {...v} />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="mb-4">デザイン</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {development_data.filter(v => v.work_type === 2).map((v, i) => (
          <Card key={i} {...v} />
          ))}
        </div>
      </div>
    </ChildPage>
  );
}
