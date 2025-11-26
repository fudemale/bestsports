export type ChannelCategory = {
  id: string
  name: string
  description?: string
  channels: string[]
}

export type RelatedPage = {
  label: string
  href: string
}

export type ChannelRegion = {
  id: string
  name: string
  flagEmoji?: string
  description?: string
  categories: ChannelCategory[]
  relatedPages?: RelatedPage[]
}

export const channelRegions: ChannelRegion[] = [
  {
    id: "united-kingdom",
    name: "United Kingdom",
    flagEmoji: "🇬🇧",
    description:
      "Sample UK IPTV channels including Sky Sports, UK entertainment, movies, drama and news — popular with viewers who want Premier League, British TV and regional content.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: [
          "Sky Sports Premier League",
          "Sky Sports Main Event",
          "TNT Sports 1",
          "TNT Sports 2",
          "Sky Sports Football",
        ],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["BBC One", "BBC Two", "ITV1", "Channel 4", "Channel 5"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: [
          "Sky Cinema Premiere",
          "Sky Cinema Action",
          "Sky Atlantic",
          "ITV Drama",
        ],
      },
    ],
    relatedPages: [
      { label: "See detailed IPTV UK options", href: "/iptv-uk" },
      { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
      { label: "Best sports IPTV overview", href: "/best-sports-iptv" },
    ],
  },
  {
    id: "united-states",
    name: "United States",
    flagEmoji: "🇺🇸",
    description:
      "Example US IPTV channel line-up with sports, premium movies, drama and entertainment — ideal for viewers who want NBA, NFL, US networks and premium series.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["ESPN", "ESPN2", "Fox Sports 1", "NBC Sports", "NBA TV", "NFL Network"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["ABC", "NBC", "CBS", "FOX", "The CW"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["HBO", "AMC", "FX", "Paramount Network"],
      },
    ],
    relatedPages: [
      { label: "Best IPTV services for 2025", href: "/best-iptv" },
      { label: "Compare IPTV subscription plans", href: "/iptv-subscription" },
    ],
  },
  {
    id: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    description:
      "Sample Spanish IPTV channels for LaLiga, movies, drama and entertainment — focused on Spain-based sports, cinema and general TV.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["LaLiga TV", "Spanish Sports HD 1"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["Spanish Cinema HD", "Series España HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["General España 1", "General España 2"],
      },
    ],
    relatedPages: [
      { label: "IPTV subscription guide", href: "/iptv-subscription" },
      { label: "Best sports IPTV (LaLiga & more)", href: "/best-sports-iptv" },
    ],
  },
  {
    id: "italy",
    name: "Italy",
    flagEmoji: "🇮🇹",
    description:
      "Sample Italian IPTV channels including Serie A sports, Italian movies, drama and entertainment — great for Italian language content and local TV.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["Italian Calcio HD", "Sports Italia 1"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["Cinema Italia HD", "Drama Italia HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["Italia General 1", "Italia General 2"],
      },
    ],
    relatedPages: [
      { label: "Best IPTV services for football fans", href: "/best-sports-iptv" },
      { label: "Compare IPTV plans and pricing", href: "/iptv-subscription" },
    ],
  },
  {
    id: "portugal",
    name: "Portugal",
    flagEmoji: "🇵🇹",
    description:
      "Example Portuguese IPTV channels for football, movies, drama and general entertainment — popular with viewers in Portugal and Lusophone audiences.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["Liga Portugal HD", "Sports Portugal 1"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["Cinema Portugal HD", "Séries Portugal HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["Portugal General 1", "Portugal General 2"],
      },
    ],
    relatedPages: [
      { label: "IPTV subscription comparison", href: "/iptv-subscription" },
      { label: "Best IPTV for European sports", href: "/best-sports-iptv" },
    ],
  },
  {
    id: "rest-of-europe",
    name: "Rest of Europe",
    flagEmoji: "🇪🇺",
    description: "A broader European IPTV sample including sports, movies and entertainment channels from multiple EU countries.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["Europe Sports 1", "Europe Football HD", "Europe Tennis"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["Europe Cinema HD", "Europe Drama HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["Europe Entertainment 1", "Europe Entertainment 2"],
      },
    ],
    relatedPages: [
      { label: "Best IPTV in 2025 (review)", href: "/best-iptv" },
      { label: "IPTV subscription overview", href: "/iptv-subscription" },
    ],
  },
  {
    id: "middle-east-north-africa",
    name: "Middle East & North Africa",
    flagEmoji: "🌍",
    description:
      "Sample MENA IPTV channels including regional sports, movies, drama and entertainment aimed at Arabic-speaking audiences.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["MENA Sports 1", "MENA Football HD"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["MENA Cinema HD", "MENA Drama HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["MENA Entertainment 1", "MENA Entertainment 2"],
      },
    ],
    relatedPages: [{ label: "IPTV subscription options", href: "/iptv-subscription" }],
  },
  {
    id: "asia-international",
    name: "Asia & International",
    flagEmoji: "🌏",
    description:
      "Example IPTV channels from Asia and international regions, including sports, cinema, drama and entertainment across multiple languages.",
    categories: [
      {
        id: "sports",
        name: "Sports",
        description: "Popular sports channels typically included in premium IPTV line-ups for live football, leagues and major events.",
        channels: ["Asia Sports 1", "International Football HD", "International Basketball"],
      },
      {
        id: "movies-drama",
        name: "Movies & Drama",
        description: "Cinema, series and drama channels for films, box-sets and TV shows in this region.",
        channels: ["Asia Cinema HD", "International Drama HD"],
      },
      {
        id: "entertainment",
        name: "Entertainment",
        description: "General entertainment channels, lifestyle, reality TV and mixed programming from this region.",
        channels: ["Asia Entertainment 1", "International Entertainment HD"],
      },
    ],
    relatedPages: [{ label: "Global IPTV subscription guide", href: "/iptv-subscription" }],
  },
]

export const channelRegionRelatedLinks: Record<string, { label: string; href: string }[]> = {
  "united-kingdom": [
    { label: "See IPTV UK details", href: "/iptv-uk" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  "united-states": [
    { label: "Best IPTV services overview", href: "/best-iptv" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  spain: [
    { label: "Best IPTV subscription options", href: "/best-iptv-subscription" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  italy: [
    { label: "Best IPTV subscription options", href: "/best-iptv-subscription" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  portugal: [
    { label: "Best IPTV subscription options", href: "/best-iptv-subscription" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  "rest-of-europe": [
    { label: "Best IPTV in 2025 (overview)", href: "/best-iptv" },
    { label: "Compare IPTV subscriptions", href: "/iptv-subscription" },
  ],
  "middle-east-north-africa": [{ label: "Compare IPTV subscriptions", href: "/iptv-subscription" }],
  "asia-international": [{ label: "Compare IPTV subscriptions", href: "/iptv-subscription" }],
}

