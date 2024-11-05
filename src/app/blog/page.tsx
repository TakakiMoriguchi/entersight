import ChildPage from "@/components/ChildPage";
import Link from "next/link";
import { BlogPost } from "./type";
import { fetchBlogData } from "@/lib/api";

export default async function Blogs() {
  const blogData: BlogPost[] = await fetchBlogData();

  return (
    <ChildPage>
      <div className="flex flex-wrap justify-center gap-6 p-4">
          <ul className="space-y-4">
            {blogData.slice(0, 10).map((post) => (
              <li key={post.id} className="border-b pb-4 last:border-b-0">
                <Link href={`/blog/${post.id}`} className="block">
                  <h4
                    className="text-lg font-semibold mb-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                <p className="text-sm mb-2">{new Date(post.date).toLocaleDateString("ja-JP")}</p>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </Link>
            </li>
          ))}
          {blogData.length >= 3 && (
            <div className="flex justify-end w-full">
              <Link href="/blog" className="text-center">もっと見る</Link>
            </div>
          )}
        </ul>
      </div>
    </ChildPage>
  );
}