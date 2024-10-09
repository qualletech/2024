import Card from "../_components/Card"
import Columns from "../_components/Columns"
import PageContainer from "../_components/PageContainer"
import getProjects from "../_utils/getProjects"

export default async function Page() {
  const projects = await getProjects()

  return (
    <PageContainer>
      <h2>Portfolio</h2>
      <Columns>{projects?.map((project) => <Card projectInfo={project} key={project.slug} />)}</Columns>
    </PageContainer>
  )
}
