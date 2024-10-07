import SectionTitle from "./SectionTitle";
import ScrollWrapper from "./ScrollWrapper";
import Link from "next/link";

export default function Services() {
  return (
    <ScrollWrapper>
      <section>
        <SectionTitle title="Services" />

      <div className="flex flex-wrap justify-center gap-6 p-4">

        <Link href="/development" className="w-64 h-full">
          <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-orange-600">
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-white">システム開発</h3>
              <p className="text-white">お客様のニーズに合わせたカスタムソリューションを提供します。</p>
            </div>
          </div>
        </Link>

        <Link href="/oss" className="w-64 h-full">
          <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-orange-600">
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-white">OSS導入</h3>
              <p className="text-white">オープンソースソフトウェアの導入と最適化をサポートします。</p>
            </div>
          </div>
        </Link>

        <Link href="/consulting" className="w-64 h-full">
          <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-orange-600">
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-white">コンサルティング</h3>
              <p className="text-white">各種ツールを使用した、DX推進のWEBコンサルティングを行います。</p>
            </div>
          </div>
        </Link>

      </div>
      </section>
    </ScrollWrapper>
  );
}
