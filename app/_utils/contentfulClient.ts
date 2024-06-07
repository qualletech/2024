import { createClient } from "contentful"

const createContentClient = () =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
const contentfulClient = createContentClient()

export default contentfulClient
