import contentfulClient from "./contentfulClient"

export default async function getProjects(): Promise<Array<any>> {
  const response = await contentfulClient.getEntries({
    content_type: "projects",
  })
  const projects = response.items.map((project) => project.fields)
  return projects
}
