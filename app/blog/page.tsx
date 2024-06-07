import BlogTile from "../_components/BlogTile"
import Columns from "../_components/Columns"
import PageContainer from "../_components/PageContainer"
import getBlogPosts from "../_utils/getBlogPosts"

export default async function BlogLanding() {
  const blogs = await getBlogPosts()
  return (
    <PageContainer>
      <h2>Blog Posts</h2>
      <Columns>
        {blogs.map((blog) => (
          <BlogTile key={blog.title} blog={blog} />
        ))}
      </Columns>
    </PageContainer>
  )
}
