import Image from "next/image";

const oss_data = [
  {
    name: "Dify",
    category: "生成AI",
    description: "DifyはAIアシスタントを構築するためのオープンソースプラットフォームです。",
    thumbnail: "/oss/dify.png",
  }
]

//Redmine
//Drupal
//WordPress
//baserCMS
//GitLab
//rocket.chat

export default function OSS() {
  return (
    <>
      <div>
        <h3>OSS</h3>
        <div>
          <p>OSSとはオープンソースソフトウェアのことです。</p>
          <p>公開された機能の範囲内であれば、自由にカスタマイズすることができるので、開発コストを削減することができます。</p>
          <p>また基本的なセキュリティ対策も有志によって検証されていますし、最新のバージョンアップも簡単です。</p>
        </div>

        <div>
          {oss_data.map((v, i) => (
            <div key={i}>
              <Image src={v.thumbnail} alt={v.name} width={100} height={100} />
              <div>{v.name}</div>
              <div>{v.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
