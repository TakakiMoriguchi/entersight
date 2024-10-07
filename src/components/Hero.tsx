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
          <p>神戸発・システム開発</p>
          <p>システム開発・OSS導入業務を行っています</p>
          <p>デザイン、インフラ構築、開発までワンストップで開発も可能です</p>
        </div>
      </section>
    </ScrollWrapper>
  );
}
