import ChildPage from "@/components/ChildPage";
import Link from "next/link";

const member_data = [
  {
    name: "Takaki Moriguchi",
    role: "Entersight代表",
    skill: "フルスタックエンジニア",
    description: "Entersightの代表です。本好き📗",
    url: "https://takakimoriguchi.github.io/takaki-moriguchi-career/",
  },
  {
    name: "Yumi Seino",
    role: "フリーランス",
    skill: "デザイナー",
    description: "バイク女子",
    url: "https://www.youtube.com/@hareru_yumi",
  },
  {
    name: "Shibakiri Koshiro",
    role: "Towhy代表",
    skill: "フロントエンドエンジニア",
    description: "あたたかくて面白いを創造し続ける",
    url: "https://towhy.co.jp/",
  },
]

export default function Member() {
  return (
    <ChildPage>
      <h3>Member</h3>

      <div>
        <p>理念：RESPECT</p>

        <p className="font-bold">R - Responsibility（責任）</p>
        <p>すべての行動に責任を持ち、プロフェッショナルとしての責任感を持って業務にあたります。</p>

        <p className="font-bold">E - Empathy（共感）</p>
        <p>他者の立場を理解し、共感することで、信頼関係を築き、チームや顧客とのコミュニケーションを円滑にします。</p>

        <p className="font-bold">S - Sincerity（誠実）</p>
        <p>誠実な態度で真摯に向き合い、誠意を持って顧客や同僚に対応します。</p>

        <p className="font-bold">P - Progress（成長）</p>
        <p>個人として、そして組織全体としての成長を目指し、常に学び、改善を続けます。</p>

        <p className="font-bold">E - Excellence（卓越）</p>
        <p>卓越したサービスや製品を提供することを追求し、質の高い結果を出すために努力します。</p>

        <p className="font-bold">C - Collaboration（協力）</p>
        <p>チームワークを重視し、協力して働くことで、より大きな成果を達成します。</p>

        <p className="font-bold">T - Trust（信頼）</p>
        <p>信頼を築き、信頼を守ることで、長期的な成功を目指します。</p>
      </div>

      <div>
        <p>Entersightでは業務提携を結べるメンバー募集中です。</p>
        <p>得意分野を分割し、最大スピードで、高品質なサービスを提供することを目指します。</p>
      </div>

      <div>
        {member_data.map((v, i) => (
          <div key={i}>
            <div>{v.name}</div>
            <div>{v.role}</div>
            <div>{v.skill}</div>
            <div>{v.description}</div>
            <Link href={v.url}>Website</Link>
          </div>
        ))}
      </div>
    </ChildPage>
  );
}
