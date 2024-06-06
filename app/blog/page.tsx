import { getBlogPosts } from "../_utils/contentful"

export default async function BlogLanding() {
  const blogs = await getBlogPosts()
  return (
    <div>
      <h1>Latest Blog Posts</h1>
      {blogs.map((blog) => (
        <div key={blog.slug as string}>
          <a href={`/blog/${blog.slug}`}> {blog.title}</a>
        </div>
      ))}
    </div>
  )
}
