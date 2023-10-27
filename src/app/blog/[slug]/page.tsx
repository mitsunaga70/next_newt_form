import { getArticleBySlug, newtClient } from "@/libs/newt";
import { Article } from "@/types/blog";
import type { Metadata } from 'next'
type Props = {
  params: {
    slug: string
  }
}
export async function generateStaticParams() {
  const { items: articles } = await newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "_sys", "slug", "body", "coverImage"],
    },
  });


  return articles.map((article) => ({
    slug: article.slug,

  }));

}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = params


  const article = await getArticleBySlug(slug)
  if (!article) return
  return (
    <main>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  )
}