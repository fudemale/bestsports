import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BRAND_NAME, SITE_URL } from "@/lib/constants"
import { ThemeProvider } from "@/components/theme-provider"
import { SitePreloader } from "@/components/ui/site-preloader"
import { RouteProgressBar } from "@/components/ui/route-progress-bar"
import { SiteStructuredData } from "@/components/seo/SiteStructuredData"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const siteUrl = SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND_NAME} - High-Quality IPTV Service`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: "Best Sports IPTV delivers 4K-ready IPTV access with instant activation and global sports coverage.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${BRAND_NAME} - High-Quality IPTV Service`,
    description: "Best Sports IPTV delivers 4K-ready IPTV access with instant activation and global sports coverage.",
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - High-Quality IPTV Service`,
    description: "Best Sports IPTV delivers 4K-ready IPTV access with instant activation and global sports coverage.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="bsiptv-theme">
          <SitePreloader />
          {/* Global brand schema */}
          <SiteStructuredData
            siteUrl={SITE_URL}
            brandName={BRAND_NAME}
            logoUrl={`${SITE_URL}/icon-dark-32x32.png`}
          />
          <SiteHeader />
          <RouteProgressBar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
