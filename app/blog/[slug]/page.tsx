import { createContentClient, getEntryBySlug } from "../../_utils/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const client = createContentClient()

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "blog",
    select: "fields.slug",
  }
  const articles = await client.getEntries(queryOptions)
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }))
}

export default async function BlogPage(props) {
  const { params } = props
  const { slug } = params

  const blog = await getEntryBySlug(slug, "blog")
  const { title, content } = blog.fields

  return (
    <div>
      <h3>{title}</h3>
      {documentToReactComponents(content)}
    </div>
  )
}
