import ScrollWrapper from "./ScrollWrapper";
import { CSSProperties } from "react";

const heroStyle: CSSProperties = {
  textAlign: 'center',
};

export default function Hero() {
  return (
    <ScrollWrapper>
      <section style={heroStyle}>
        <h2 className='text-4xl font-bold mb-4'>Entersight</h2>
        <div className="description">
          <p>業務効率化とビジネスの成長を支えるシステム開発とOSS導入を提供します。</p>
          <p>デザインから設計、インフラ構築、開発まで、ワンストップでサポート。</p>
          <p>複雑なプロジェクトも迅速かつ丁寧に対応いたします。</p>
        </div>
      </section>
    </ScrollWrapper>
  );
}
