import PageContainer from "../../_components/PageContainer"
import getEntryBySlug from "../../_utils/getEntryBySlug"
import getSlugsForParams from "../../_utils/getSlugsForParams"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export async function generateStaticParams() {
  const slugs = await getSlugsForParams("blog")
  return slugs
}

const renderOptions = {
  renderNode: {
    "embedded-asset-block": (node) => {
      const { file, title } = node.data.target.fields
      const { url } = file

      return (
        <img
          src={url}
          alt={title}
          style={{
            maxHeight: "50dvh",
            maxWidth: "100%",
            aspectRatio: "auto",
            objectFit: "contain",
            borderRadius: "1rem",
          }}
        />
      )
    },
    paragraph: (node, children) => <p style={{ width: "90%", wordBreak: "break-word" }}>{children}</p>,
  },
}

export default async function BlogPage(props) {
  const { params } = props
  const { slug } = params

  const blog = await getEntryBySlug(slug, "blog")
  const { title, content } = blog.fields

  return (
    <PageContainer>
      <div style={{ display: "grid", paddingRight: "2rem", gridGap: "1rem" }}>
        <h3>{title}</h3>
        {documentToReactComponents(content, renderOptions)}
      </div>
    </PageContainer>
  )
}
