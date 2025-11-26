import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs"
import {
  getPostsByCategory,
  getAllCategories,
  getCategoryDisplayName,
  getCategoryDescription,
  type BlogCategory,
} from "@/lib/blog-utils"
import { SITE_URL } from "@/lib/constants"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const validCategories: BlogCategory[] = ["guides", "tutorials", "reviews"]

  if (!validCategories.includes(category as BlogCategory)) {
    return {
      title: "Category Not Found",
    }
  }

  const displayName = getCategoryDisplayName(category as BlogCategory)

  return {
    title: `${displayName} | IPTV Blog`,
    description: getCategoryDescription(category as BlogCategory),
    openGraph: {
      title: `${displayName} | IPTV Blog`,
      description: getCategoryDescription(category as BlogCategory),
      url: `${SITE_URL}/blog/${category}`,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const validCategories: BlogCategory[] = ["guides", "tutorials", "reviews"]

  if (!validCategories.includes(category as BlogCategory)) {
    notFound()
  }

  const posts = getPostsByCategory(category as BlogCategory)
  const allCategories = getAllCategories()
  const displayName = getCategoryDisplayName(category as BlogCategory)
  const description = getCategoryDescription(category as BlogCategory)

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <BlogBreadcrumbs category={category as BlogCategory} categoryDisplayName={displayName} />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{displayName}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
        </div>

        {/* Category Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/${cat}`}
              className={`px-4 py-2 rounded-full border transition-colors ${
                cat === category
                  ? "bg-primary/20 text-primary border-primary/50"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:border-white/20"
              }`}
            >
              {getCategoryDisplayName(cat)}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
