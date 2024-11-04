import SectionTitle from "./SectionTitle";
import ScrollWrapper from "./ScrollWrapper";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <ScrollWrapper>
      <section>
        <SectionTitle title="Services" />

        <div className="flex flex-wrap justify-center gap-6 p-4">
          <Link href="/development" className="w-64 h-72">
            <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-cyan-600">
              <div className="p-4 flex flex-col h-full">
                <div className="text-center">
                  <Image src="/app/web_development.svg" alt="システム開発" width={100} height={100} className="mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-white">システム開発</h3>
                </div>
                <p className="text-white text-sm mt-2">お客様のニーズに合わせたカスタムソリューションを提供します。</p>
              </div>
            </div>
          </Link>

          <Link href="/oss" className="w-64 h-72">
            <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-green-600">
              <div className="p-4 flex flex-col h-full">
                <div className="text-center">
                  <Image src="/app/oss_introduction.svg" alt="OSS導入" width={100} height={100} className="mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-white">OSS導入</h3>
                </div>
                <p className="text-white text-sm mt-2">オープンソースソフトウェアの導入と最適化をサポートします。</p>
              </div>
            </div>
          </Link>

          <Link href="/consulting" className="w-64 h-72">
            <div className="bg-black bg-opacity-50 border border-white rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-yellow-600">
              <div className="p-4 flex flex-col h-full">
                <div className="text-center">
                  <Image src="/app/consulting.svg" alt="コンサルティング" width={100} height={100} className="mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-white">コンサルティング</h3>
                </div>
                <p className="text-white text-sm mt-2">各種ツールを使用した、DX推進のWEBコンサルティングを行います。</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </ScrollWrapper>
  );
}
