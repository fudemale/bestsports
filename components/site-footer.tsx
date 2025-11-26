import Link from "next/link"
import { Tv, Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { BRAND_NAME } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Tv className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">{BRAND_NAME}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              High-quality IPTV access providing thousands of channels, movies, and series in 4K quality. Watch anywhere, anytime.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Plans */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Plans</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://vwatch.live"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  1 Month Access
                </Link>
              </li>
              <li>
                <Link
                  href="https://vwatch.live"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  3 Months Access
                </Link>
              </li>
              <li>
                <Link
                  href="https://vwatch.live"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  6 Months Access
                </Link>
              </li>
              <li>
                <Link
                  href="https://vwatch.live"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  12 Months Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Setup Guides */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Setup Guides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/setup/how-to-install-iptv-on-android" className="text-muted-foreground hover:text-primary text-sm">
                  Installation for Android
                </Link>
              </li>
              <li>
                <Link href="/setup/how-to-install-iptv-on-firestick" className="text-muted-foreground hover:text-primary text-sm">
                  Installation for FireStick
                </Link>
              </li>
              <li>
                <Link href="/setup/how-to-install-iptv-on-ios" className="text-muted-foreground hover:text-primary text-sm">
                  Installation for iOS
                </Link>
              </li>
              <li>
                <Link href="/setup/how-to-install-iptv-on-smart-tv" className="text-muted-foreground hover:text-primary text-sm">
                  Installation for Smart TV
                </Link>
              </li>
              <li>
                <Link href="/setup/how-to-setup-iptv-on-mag-device" className="text-muted-foreground hover:text-primary text-sm">
                  MAG Device Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal & Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-primary text-sm">
                  Refund Policy
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@bestsportsiptv.com" className="hover:text-primary transition-colors">
                  support@bestsportsiptv.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <div className="h-6 w-10 bg-white/10 rounded opacity-50"></div>
            <div className="h-6 w-10 bg-white/10 rounded opacity-50"></div>
            <div className="h-6 w-10 bg-white/10 rounded opacity-50"></div>
            <div className="h-6 w-10 bg-white/10 rounded opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
