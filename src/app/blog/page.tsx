import { Header } from "@/components/header";
import { createClient } from "../../prismicio";
import PostList from "./PostList";

export default async function Blog() {
  const client = createClient();
  
  const latestBlogPosts = await client.getAllByType(
    "blog",
    {
      fetchOptions:
        process.env.NODE_ENV === 'production'
          ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
          : { next: { revalidate: 5 } },
      limit: 3,
      orderings: [
        {
          field: "my.blog.published_on",
          direction: "desc",
        },
      ],
    },
  );

  return (
    <div className="px-6 pb-6">
      <div className="py-6">
        <Header />
      </div>

      <div className="leading-8 font-medium">
      <h1 className="text-4xl text-violet-500 font-bold mt-4 font-[family-name:var(--font-spectral)]">Blog</h1>
        <p className="mt-4">
          Here are some of my latest blog posts. Enjoy!
        </p>
      </div>

      <PostList posts={latestBlogPosts} />
    </div>
  );
}
