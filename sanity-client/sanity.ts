import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '21fy9g0s',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPlayers() {
  const posts = await client.fetch('*[_type == "fifaCard"]')
  return posts
}
