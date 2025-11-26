export const SITE_URL = "https://bestsportsiptv.com"

export const GLOBAL_CTA_URL =
  "https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=cta&utm_campaign=global"

export function buildCampaignCtaUrl(keywordSlug: string) {
  return `https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=cta&utm_campaign=${keywordSlug}`
}

export const BRAND_NAME = "Best Sports IPTV"
