import { Card } from "@/components/Card";
import ChildPage from "@/components/ChildPage";
import { Information } from "@/components/Information";

const oss_data = [
  {
    category: 2,
    name: "Dify",
    description: "DifyはAIアシスタントを構築するためのオープンソースプラットフォームです。",
    thumbnail: "/oss/dify.png",
  },
  {
    category: 2,
    name: "WordPress",
    description: "WordPressはコンテンツ管理システムです。",
    thumbnail: "/oss/wordpress.png",
  },
  {
    category: 2,
    name: "Redmine",
    description: "導入検討中",
    thumbnail: "",
  },
  {
    category: 2,
    name: "Drupal",
    description: "導入検討中",
    thumbnail: "",
  },
  {
    category: 2,
    name: "GitLab",
    description: "導入検討中",
    thumbnail: "",
  },
  {
    category: 2,
    name: "rocket.chat",
    description: "導入検討中",
    thumbnail: "",
  },
]

export default function OSS() {
  return (
    <ChildPage>
      <Information
        title="OSS"
        description={[
          "OSSとはオープンソースソフトウェアのことです。",
          "公開された機能の範囲内であれば、自由にカスタマイズすることができるので、開発コストを削減することができます。",
          "また基本的なセキュリティ対策も有志によって検証されていますし、最新のバージョンアップも簡単です。"
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oss_data.map((v, i) => (
          <Card key={i} {...v} />
        ))}
      </div>
    </ChildPage>
  );
}
