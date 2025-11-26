import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost, BlogCategory } from "@/lib/blog-types"

export type { BlogPost, BlogCategory }

const contentDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  const categories: BlogCategory[] = ["guides", "tutorials", "reviews"]
  const allPosts: BlogPost[] = []

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, category)
    if (!fs.existsSync(categoryPath)) return

    const files = fs.readdirSync(categoryPath)
    files.forEach((file) => {
      if (file.endsWith(".md") || file.endsWith(".mdx")) {
        const filePath = path.join(categoryPath, file)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContents)

        allPosts.push({
          slug: file.replace(/\.(md|mdx)$/, ""),
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          author: data.author || "Best Sports IPTV",
          category: data.category || category,
          tags: data.tags || [],
          ogImage: data.ogImage || "/og/og-blog-default.jpg",
          content,
        })
      }
    })
  })

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(category: BlogCategory, posts?: BlogPost[]): BlogPost[] {
  const sourcePosts = posts || getAllPosts()
  return sourcePosts.filter((post) => post.category === category)
}

export function getPostBySlug(category: BlogCategory, slug: string): BlogPost | null {
  const filePath = path.join(contentDirectory, category, `${slug}.md`)
  const altFilePath = path.join(contentDirectory, category, `${slug}.mdx`)

  let filePathToUse: string | null = null
  if (fs.existsSync(filePath)) {
    filePathToUse = filePath
  } else if (fs.existsSync(altFilePath)) {
    filePathToUse = altFilePath
  }

  if (!filePathToUse) return null

  const fileContents = fs.readFileSync(filePathToUse, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Best Sports IPTV",
    category: data.category || category,
    tags: data.tags || [],
    ogImage: data.ogImage || "/og/og-blog-default.jpg",
    content,
  }
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts
    .filter((post) => post.slug !== currentPost.slug && post.category === currentPost.category)
    .slice(0, limit)
}

export function getFeaturedPosts(limit = 3, posts?: BlogPost[]): BlogPost[] {
  const sourcePosts = posts || getAllPosts()
  return sourcePosts.slice(0, limit)
}

export function getAllCategories(): BlogCategory[] {
  return ["guides", "tutorials", "reviews"]
}

export function getCategoryDisplayName(category: BlogCategory): string {
  const names: Record<BlogCategory, string> = {
    guides: "IPTV Guides",
    tutorials: "IPTV Tutorials",
    reviews: "IPTV Reviews",
  }
  return names[category]
}

export function getCategoryDescription(category: BlogCategory): string {
  const descriptions: Record<BlogCategory, string> = {
    guides:
      "Comprehensive guides covering IPTV basics, technology, device compatibility, and everything you need to know about Internet Protocol Television.",
    tutorials:
      "Step-by-step tutorials for installing IPTV apps, configuring devices, and optimizing your streaming experience on FireStick, Android, and more.",
    reviews:
      "In-depth reviews and comparisons of IPTV providers, services, and subscriptions to help you find the best option for your needs.",
  }
  return descriptions[category]
}
