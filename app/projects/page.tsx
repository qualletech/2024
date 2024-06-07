import Card from "../_components/Card"
import Columns from "../_components/Columns"
import PageContainer from "../_components/PageContainer"
import { PROJECTS } from "./CONSTANTS"

export default function Page() {
  return (
    <PageContainer>
      <h2>Developed by Qualle Tech</h2>
      <Columns>{PROJECTS?.map((project) => <Card projectInfo={project} />)}</Columns>
    </PageContainer>
  )
}
