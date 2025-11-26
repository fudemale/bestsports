"use client"

import { useState, useMemo } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogCategoryCard } from "@/components/blog/blog-category-card"
import { BlogSearchBar } from "@/components/blog/blog-search-bar"
import type { BlogPost, BlogCategory } from "@/lib/blog-types"

type BlogIndexClientProps = {
  posts: BlogPost[]
  categories: BlogCategory[]
  featuredPosts: BlogPost[]
  postsByCategory: Record<string, BlogPost[]>
  categoryInfo: Record<string, { displayName: string; description: string }>
}

export function BlogIndexClient({
  posts: allPosts,
  categories,
  featuredPosts,
  postsByCategory,
  categoryInfo,
}: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts

    const query = searchQuery.toLowerCase()
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }, [searchQuery, allPosts])

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IPTV Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides, tutorials, and reviews to help you get the most out of your IPTV experience
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <BlogSearchBar onSearch={setSearchQuery} />
        </div>

        {/* Featured Posts */}
        {!searchQuery && featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Category Cards */}
        {!searchQuery && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <BlogCategoryCard
                  key={category}
                  category={category}
                  postCount={postsByCategory[category]?.length || 0}
                  displayName={categoryInfo[category]?.displayName || category}
                  description={categoryInfo[category]?.description || ""}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Posts (or Search Results) */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {searchQuery ? `Search Results (${filteredPosts.length})` : "All Articles"}
          </h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
