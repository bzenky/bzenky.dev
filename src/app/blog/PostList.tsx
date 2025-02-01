import { Content } from "@prismicio/client";
import Link from "next/link";
import { format } from "date-fns"

interface PostProps {
  posts: Content.BlogDocument[];
}

export default function PostList({ posts }: PostProps) {
  return (
    <div>
      {posts.map((post) => {
        const contentText = post.data.content as unknown as [{ [key: string]: string }];
        const fullPostTextPreview = contentText.map((content) => content.text).join(" ");
        let postTextPreview = fullPostTextPreview.slice(0, 200);

        if (fullPostTextPreview.length > 200) postTextPreview += '...';

        return (
          <div key={post.uid} className="flex flex-col gap-4 py-2">
            <Link className="flex gap- group" href={post.url || ''}>
              <div>
                <div className="mb-3">
                  <h2 className="text-xl font-bold mt-6  text-slate-300 font-[family-name:var(--font-spectral)] group-hover:text-sky-50 group-hover:drop-shadow-md transition-colors">
                    {post.data.title}
                  </h2>
                  <span className="text-base text-slate-400 group-hover:drop-shadow-md group-hover:text-sky-50 transition-colors">{format(post.data.published_at as string, 'PP')}</span>
                </div>

                <p className="group-hover:text-slate-300 transition-colors">{postTextPreview}</p>
              </div>
            </Link>

            <hr className="border border-slate-300/30" />
          </div>
        )
      })}
    </div>
  );
}
