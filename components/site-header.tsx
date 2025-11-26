"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tv, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { BRAND_NAME, GLOBAL_CTA_URL } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "Plans", href: "/#plans" },
    { name: "Sports", href: "/#sports" },
    { name: "Channels", href: "/channels" },
    { name: "Devices", href: "/#devices" },
    { name: "Setup Guides", href: "/setup" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Tv className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">{BRAND_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="ghost" className="text-foreground hover:text-primary hover:bg-accent">
              <Link href={GLOBAL_CTA_URL}>Free Test</Link>
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_15px_rgba(0,225,255,0.3)] hover:shadow-[0_0_25px_rgba(0,225,255,0.5)] transition-all"
            >
              <Link href={GLOBAL_CTA_URL}>Get IPTV</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Button asChild variant="outline" className="w-full border-border hover:bg-muted bg-transparent">
              <Link href={GLOBAL_CTA_URL}>Free Test</Link>
            </Button>
            <Button asChild className="w-full bg-primary text-primary-foreground">
              <Link href={GLOBAL_CTA_URL}>Get IPTV</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
