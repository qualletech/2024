import contentfulClient from "./contentfulClient"

export default async function getBlogPosts(): Promise<Array<any>> {
  const response = await contentfulClient.getEntries({
    content_type: "blog",
  })
  const blogPosts = response.items.map((blog) => (!blog.fields.draft ? blog.fields : null))
  console.log(blogPosts)
  return blogPosts
}
