export type BlogCategory = "guides" | "tutorials" | "reviews"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: BlogCategory
  tags: string[]
  ogImage: string
  content: string
}
