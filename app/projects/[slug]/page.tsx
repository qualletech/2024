import ProjectDetailPage from "../../_components/ProjectDetailPage"
import getEntryBySlug from "../../_utils/getEntryBySlug"
import getSlugsForParams from "../../_utils/getSlugsForParams"

export async function generateStaticParams() {
  const slugs = await getSlugsForParams("projects")
  return slugs
}

export default async function BlogPage(props) {
  const { params } = props
  const { slug } = params

  const project = await getEntryBySlug(slug, "projects")

  return <ProjectDetailPage projectDetails={project.fields} />
}
