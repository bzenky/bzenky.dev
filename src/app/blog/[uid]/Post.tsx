import { Header } from "@/components/header";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Image from "next/image";
import { BlogDocument } from "../../../../prismicio-types";
import { format } from "date-fns";

interface PostProps {
  blogPost: BlogDocument;
}

export default function Post({ blogPost }: PostProps) {
  const data = blogPost.data;

  return (
    <div className="px-6 pb-6">
      <div className="py-6">
        <Header />
      </div>

      <div className="font-medium">
        <h1 className="text-4xl text-violet-500 font-bold mt-4 font-[family-name:var(--font-spectral)]">{data.title}</h1>

        <p className="text-slate-300">
          {format(data.published_at as string, 'PP')}
        </p>

        {data.post_image && (
          <Image
            src={data.post_image.url || ''}
            alt={data.post_image.alt || ''}
            width={800}
            height={400}
            className="mt-4"
          />
        )}
      </div>

      <div className="mt-4 leading-9 indent-8">
        <PrismicRichText
          field={data.content}
        />
      </div>

      <div className="mt-8">
        <Link href="/blog" className="group" >
          <span className="text-violet-500 font-bold group-hover:underline underline-offset-2">
            Back to blog
          </span>
        </Link>
      </div>
    </div>
  )
}