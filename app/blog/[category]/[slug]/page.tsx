import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs"
import { BlogTOC } from "@/components/blog/blog-toc"
import { BlogAuthorBox } from "@/components/blog/blog-author-box"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { MarkdownRenderer } from "@/components/blog/markdown-renderer"
import { BlogTag } from "@/components/blog/blog-tag"
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
  getCategoryDisplayName,
  type BlogCategory,
} from "@/lib/blog-utils"
import { SITE_URL } from "@/lib/constants"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const post = getPostBySlug(category as BlogCategory, slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const ogImage = post.ogImage.startsWith("http") ? post.ogImage : `${SITE_URL}${post.ogImage}`

  return {
    title: `${post.title} | IPTV Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${category}/${slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params
  const post = getPostBySlug(category as BlogCategory, slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug && p.category === post.category)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const ogImage = post.ogImage.startsWith("http") ? post.ogImage : `${SITE_URL}${post.ogImage}`

  // Generate headings for TOC
  const _headings = post.content
    .split("\n")
    .filter((line) => line.trim().startsWith("#"))
    .map((line) => {
      const level = line.match(/^#+/)?.[0].length || 0
      const text = line.replace(/^#+\s+/, "").trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      return { id, text, level }
    })

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: ogImage,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Best Sports IPTV",
              url: SITE_URL,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: getCategoryDisplayName(post.category),
                item: `${SITE_URL}/blog/${post.category}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: post.title,
                item: `${SITE_URL}/blog/${post.category}/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <div className="flex flex-col min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <BlogBreadcrumbs
            category={post.category}
            postTitle={post.title}
            categoryDisplayName={getCategoryDisplayName(post.category)}
          />

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <BlogTag key={tag} tag={tag} />
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <article className="prose prose-invert max-w-none">
              <MarkdownRenderer content={post.content} />
            </article>

            {/* Sidebar with TOC */}
            <aside>
              <BlogTOC content={post.content} />
            </aside>
          </div>

          {/* Author Box */}
          <div className="mt-12">
            <BlogAuthorBox author={post.author} date={post.date} />
          </div>

          {/* Navigation */}
          <nav className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.category}/${prevPost.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ChevronLeft className="h-5 w-5" />
                <div>
                  <div className="text-xs uppercase tracking-wide">Previous</div>
                  <div className="font-medium">{prevPost.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.category}/${nextPost.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-right"
              >
                <div>
                  <div className="text-xs uppercase tracking-wide">Next</div>
                  <div className="font-medium">{nextPost.title}</div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </nav>

          {/* Related Posts */}
          {relatedPosts.length > 0 && <BlogRelatedPosts posts={relatedPosts} />}
        </div>
      </div>
    </>
  )
}
