export interface WebWork {
  id: string;
  name: string;
  industry: string;
  url: string | undefined;
  technologies: string[];
  description: string;
  thumbnail: string;
  isPlaceholder?: boolean;
}

export const webWorks: WebWork[] = [
  {
    id: 'entersight',
    name: 'エンターサイト',
    industry: 'システム開発・WEB制作・デザイン・ITコンサルティング',
    url: undefined,
    technologies: ['Next.js', 'Astro'],
    description: `本サイトは、１〜２年に１度のペースで全面リニューアルを行っています。
最新の技術トレンドを取り入れ、探究心を追求したサイトを目指しています。
2025年版では、claude codeを全面的に使用し、ギミックを豊富にしつつもライブラリに極力依存せず、軽量なサイトを構築しました。
    `,
    thumbnail: 'https://dummyimage.com/400x300/10b981/ffffff.svg&text=E'
  },
  {
    id: 'tinywest',
    name: 'tinyWest',
    industry: 'スマートフォン修理業',
    url: undefined,
    technologies: ['Vue.js', 'Nuxt.js', 'MicroCMS', 'Formspree'],
    description: `自社サービスとして、新規ビジネスの立ち上げ。
MicroCMSを導入し、コンテンツSEOに対応。
信頼性の高い修理店としてのブランドイメージを重視したデザインを心がけ、金額は安いが、高級感があり、信頼できるサイトを目指しました。
問い合わせにFormspreeを導入することによって、全てクラウドで完結する仕組みを構築しました。`,
    thumbnail: 'https://dummyimage.com/400x300/1e40af/ffffff.svg&text=T'
  },
  {
    id: 'l-rental-car',
    name: 'Lレンタカー',
    industry: 'マンスリーレンタカー',
    url: 'https://l-rental-car.com/',
    technologies: ['Astro'],
    description: `新規ビジネスの立ち上げ。
WEBサイト構築、GoogleBusiness、Line公式アカウントの構築をしました。
サイト構築はAIを活用し、1ヶ月程度でのスピード公開、低コストを実現しました。
安さ押しではなく、テーマカラーの赤を基調に、誰でも気軽に利用できる親しみやすいシンプルなデザインを心がけました。
レスポンシブデザイン対応。`,
    thumbnail: 'https://dummyimage.com/400x300/dc2626/ffffff.svg&text=L'
  },
  {
    id: 'more',
    name: 'and more...',
    industry: '',
    url: undefined,
    technologies: [],
    description: '他にも多数の制作実績がございます。',
    thumbnail: 'https://dummyimage.com/400x300/6b7280/ffffff.svg&text=...',
    isPlaceholder: true
  }
];
