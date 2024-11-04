import ChildPage from "@/components/ChildPage";
import { fetchBlogPostById } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// 型定義
type Props = {
  params: {
    id: string;
  };
};

export default async function BlogId({ params }: Props) {
  const post = await fetchBlogPostById(params.id);

  if (!post) {
    return (
      <ChildPage>
        <div className="max-w-3xl mx-auto p-4 text-center">
          <h1 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h1>
          <p>お探しの記事は存在しないか、削除された可能性があります。</p>
        </div>
      </ChildPage>
    );
  }

  return (
    <ChildPage>
      <article className="max-w-3xl mx-auto p-4 prose">
        <h1 className="text-3xl font-bold mb-4">
          {post.title.rendered}
        </h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content.rendered}
        </ReactMarkdown>
      </article>
    </ChildPage>
  );
}
