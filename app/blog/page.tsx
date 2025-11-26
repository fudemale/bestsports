import type { Metadata } from "next"
import { BlogIndexClient } from "@/components/blog/blog-index-client"
import { SITE_URL } from "@/lib/constants"
import {
  getAllPosts,
  getAllCategories,
  getFeaturedPosts,
  getPostsByCategory,
  getCategoryDisplayName,
  getCategoryDescription,
} from "@/lib/blog-utils"

export const metadata: Metadata = {
  title: "IPTV Blog | Guides, Tutorials & Reviews",
  description:
    "Learn about IPTV setup, devices, sports streaming, FireStick installation, Android setup, and IPTV comparisons.",
  openGraph: {
    title: "IPTV Blog | Guides, Tutorials & Reviews",
    description:
      "Learn about IPTV setup, devices, sports streaming, FireStick installation, Android setup, and IPTV comparisons.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
}

export default async function BlogIndexPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const featuredPosts = getFeaturedPosts(3, posts)
  
  const postsByCategory: Record<string, typeof posts> = {}
  const categoryInfo: Record<string, { displayName: string; description: string }> = {}
  categories.forEach((category) => {
    postsByCategory[category] = getPostsByCategory(category, posts)
    categoryInfo[category] = {
      displayName: getCategoryDisplayName(category),
      description: getCategoryDescription(category),
    }
  })

  return (
    <BlogIndexClient
      posts={posts}
      categories={categories}
      featuredPosts={featuredPosts}
      postsByCategory={postsByCategory}
      categoryInfo={categoryInfo}
    />
  )
}
