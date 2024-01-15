import { HttpClient, Result } from '@/lib/HttpClient'

export const getPosts = async (): Result<string> => {
  const result = await HttpClient.get('posts/1')
  return {}
}
