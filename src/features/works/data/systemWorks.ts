export interface SystemWork {
  id: string;
  logo: string;
  title: string;
  status: string;
  link: string | null;
  technologies: string[];
  category: string;
  description: string;
  thoughts: string;
  screenshots: string[];
}

export const systemWorks: SystemWork[] = [
  {
    id: 'hotlet',
    logo: '/works/hotlet/hotlet_logo.svg',
    title: 'hotlet',
    status: '開発中',
    link: 'https://hotlet.vercel.app/lp',
    technologies: ['Next.js', 'TypeScript'],
    category: 'IoT',
    description: `トイレ利用管理システム開発（個人開発）
公共・商業施設などで無料提供されているトイレを有料化し、運営者の収益化と利用者の利便性向上を両立することを目的に開発したシステムです。
トイレのドアにはオートロック機構を設置し、利用者はスマートフォンを用いて簡単に解錠できます。
認証には Google Auth を採用しており、ユーザー情報を安全に管理可能です。
また、Stripe によるオンライン決済機能を導入することで、キャッシュレスでスムーズな支払い体験を実現しました。
これにより、悪質な利用や不正アクセスに対するリスクを抑えつつ、運営者側の収益化を支援します。
本システムは LIFFアプリ をベースとして開発されており、LINEユーザーであれば誰でも直感的に利用できます。
幅広い年代層に対応できるシンプルな操作性を重視しています。
さらに、Web版では多言語対応を実装し、訪日外国人を含むインバウンド需要にも柔軟に対応可能な仕組みとしました。`,
    thoughts: `本システムの開発を通じて、「物理的なアクセス制御」と「オンライン認証・決済」を統合することの有用性を改めて実感しました。
トイレという限られた用途に留まらず、この仕組みを応用することで、例えば 会員制スペース・レンタル施設・時間貸しサービス など、さまざまな分野で柔軟なアクセス管理と課金モデルを構築することが可能です。
個人開発としては小規模ながらも、社会的課題の解決とサービスの持続可能性を両立させる技術基盤として発展性のあるプロジェクトであると感じています。`,
    screenshots: [
      'https://dummyimage.com/800x600/667eea/ffffff.svg&text=Screenshot+1',
      'https://dummyimage.com/800x600/764ba2/ffffff.svg&text=Screenshot+2',
      'https://dummyimage.com/800x600/667eea/ffffff.svg&text=Screenshot+3',
    ]
  },
  {
    id: 'kizuna',
    logo: '/works/kizuna/kizuna_logo.svg',
    title: 'Kizuna',
    status: '開発中',
    link: null,
    technologies: ['Next.js', 'NestJS'],
    category: 'Webアプリケーション',
    description: `チームの振り返りミーティングを効率化し、メンバー間のコミュニケーションを円滑にすることを目的として開発している Web アプリケーションです。
従来、ホワイトボードツールや付箋を用いて行われる振り返りの手法を、専門のアプリケーションとして再設計し、より生産的で参加しやすい環境を実現することを目指しています。

WebSocket を活用したリアルタイム同期機能を備えており、離れた場所にいるメンバー同士でもスムーズに意見交換が可能です。
また、アニメーションやインタラクティブな UI を取り入れることで、楽しみながら参加できる仕組みを意識して設計しています。
ゲーム感覚で取り組める操作性を重視しつつ、参加者が心理的安全性を確保しながら建設的なフィードバックを共有できるよう配慮しています。

今後は Stripe 決済を導入し、無料プランと有料プランを提供する予定です。
既存のレトロスペクティブ手法をサポートする一方で、心理学的アプローチを取り入れた新しい手法の提供も計画しています。
また、ファシリテーションを支援する機能を充実させることで、初心者でも安心して実施できる環境構築を目指しています。`,
    thoughts: `レトロスペクティブは、チームの成長を促し、継続的な改善につながる非常に有効なプロセスであると考えています。
これをより簡単かつ楽しく実施できるツールを提供することで、チームのパフォーマンス向上に貢献できると感じています。`,
    screenshots: [
      'https://dummyimage.com/800x600/764ba2/ffffff.svg&text=Screenshot+1',
      'https://dummyimage.com/800x600/667eea/ffffff.svg&text=Screenshot+2',
    ]
  },
  {
    id: 'kllama',
    logo: '/works/kllama/kllama_logo.svg',
    title: 'Kllama',
    status: '開発終了',
    link: null,
    technologies: ['React', 'FastAPI', 'llamaindex', 'zabbix'],
    category: '生成AI',
    description: `OpenAI が公式に類似機能を提供する以前に構築した、RAG（Retrieval-Augmented Generation）を活用したドキュメント検索・要約アプリケーションです。
ユーザーは React ベースのフロントエンドから自然言語で質問を入力し、FastAPI で構築したバックエンドが処理を行います。
バックエンドでは llamaIndex を用いてドキュメント内容を検索し、関連性の高い情報を抽出したうえで要約を生成します。
回答精度を高めるため、内部では 独自のプロンプト設計 や チェーン構造の工夫 を取り入れ、当時一般的となる前の段階で良質なプロンプト手法を積極的に導入しました。
また、Zabbix によるシステム監視 を組み込み、安定稼働を維持できるよう運用面にも配慮した構成としています。`,
    thoughts: `本システムの開発中、Dify が登場したことで RAG の実装は大幅に容易になり、現在はそちらの利用に移行しました。
しかし、本プロジェクトを通じて、プロンプト設計やチェーン構築の工夫など、生成 AI の基礎を深く理解する良い経験となりました。
RAG の根本的な仕組みや精度向上のためのアプローチを実地で学べたことは、後の開発にも大きく役立っております。`,
    screenshots: [
      'https://dummyimage.com/800x600/667eea/ffffff.svg&text=Screenshot+1',
    ]
  }
];
