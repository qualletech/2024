import contentfulClient from "./contentfulClient"

export default async function getEntryBySlug(slug: string, type: string) {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  }
  const queryResult = await contentfulClient.getEntries(queryOptions)
  return queryResult.items[0]
}