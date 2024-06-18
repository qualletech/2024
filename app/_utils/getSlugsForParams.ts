import contentfulClient from "./contentfulClient"

export default async function getSlugsForParams(type: string) {
  const queryOptions = {
    content_type: type,
    select: "fields.slug",
  }
  const queryResult = await contentfulClient.getEntries(queryOptions)
  return (
    queryResult.items.map((entry) => ({
      slug: entry.fields.slug,
    })) || []
  )
}
