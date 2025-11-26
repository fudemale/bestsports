import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { getAllPosts, getAllCategories } from "@/lib/blog-utils"

const routes = [
  "",
  "/landing",
  "/iptv-subscription",
  "/best-iptv",
  "/best-iptv-subscription",
  "/best-paid-iptv",
  "/best-sports-iptv",
  "/iptv-uk",
  "/setup/how-to-install-iptv-on-firestick",
  "/setup/how-to-install-iptv-on-android",
  "/setup/how-to-install-iptv-on-ios",
  "/setup/how-to-install-iptv-on-smart-tv",
  "/setup/how-to-setup-iptv-on-mag-device",
  "/setup",
  "/channels",
  "/blog",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pageEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }))

  // Add blog category pages
  const categories = getAllCategories()
  const categoryEntries = categories.map((category) => ({
    url: `${SITE_URL}/blog/${category}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Add blog post pages
  const posts = getAllPosts()
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const pdfEntry = {
    url: "https://bestsportsiptv.com/setup/firestick-setup-guide.pdf",
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }

  return [...pageEntries, ...categoryEntries, ...postEntries, pdfEntry]
}
