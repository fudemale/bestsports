export type ChannelCountry = "UK" | "US" | "Europe" | "MENA" | "Asia" | "International"

export type ChannelCategory = "Sports" | "Movies" | "Entertainment" | "News" | "Kids" | "Documentary"

export type Channel = {
  name: string
  country: ChannelCountry
  category: ChannelCategory
  language?: string
  notes?: string
}

export const channels: Channel[] = [
  // UK Channels
  { name: "UK Sports 1", country: "UK", category: "Sports", language: "English" },
  { name: "UK Sports 2", country: "UK", category: "Sports", language: "English" },
  { name: "UK Premier League", country: "UK", category: "Sports", language: "English" },
  { name: "UK Football HD", country: "UK", category: "Sports", language: "English" },
  { name: "UK Cricket", country: "UK", category: "Sports", language: "English" },
  { name: "UK Movies Premium", country: "UK", category: "Movies", language: "English" },
  { name: "UK Cinema HD", country: "UK", category: "Movies", language: "English" },
  { name: "UK Action Movies", country: "UK", category: "Movies", language: "English" },
  { name: "UK Drama", country: "UK", category: "Entertainment", language: "English" },
  { name: "UK Comedy", country: "UK", category: "Entertainment", language: "English" },
  { name: "UK News 24", country: "UK", category: "News", language: "English" },
  { name: "UK Breaking News", country: "UK", category: "News", language: "English" },
  { name: "UK Kids Channel", country: "UK", category: "Kids", language: "English" },
  { name: "UK Cartoon Network", country: "UK", category: "Kids", language: "English" },
  { name: "UK Documentary", country: "UK", category: "Documentary", language: "English" },
  { name: "UK Nature HD", country: "UK", category: "Documentary", language: "English" },

  // US Channels
  { name: "US Sports Network", country: "US", category: "Sports", language: "English" },
  { name: "US Football HD", country: "US", category: "Sports", language: "English" },
  { name: "US Basketball", country: "US", category: "Sports", language: "English" },
  { name: "US Baseball", country: "US", category: "Sports", language: "English" },
  { name: "US Movies Channel", country: "US", category: "Movies", language: "English" },
  { name: "US Cinema Plus", country: "US", category: "Movies", language: "English" },
  { name: "US Action HD", country: "US", category: "Movies", language: "English" },
  { name: "US Drama Series", country: "US", category: "Entertainment", language: "English" },
  { name: "US Comedy Central", country: "US", category: "Entertainment", language: "English" },
  { name: "US Reality TV", country: "US", category: "Entertainment", language: "English" },
  { name: "US News Network", country: "US", category: "News", language: "English" },
  { name: "US Breaking News", country: "US", category: "News", language: "English" },
  { name: "US Kids TV", country: "US", category: "Kids", language: "English" },
  { name: "US Animation", country: "US", category: "Kids", language: "English" },
  { name: "US Discovery", country: "US", category: "Documentary", language: "English" },
  { name: "US History Channel", country: "US", category: "Documentary", language: "English" },

  // Europe Channels
  { name: "Europe Sports 1", country: "Europe", category: "Sports", language: "Multi" },
  { name: "Europe Football", country: "Europe", category: "Sports", language: "Multi" },
  { name: "Europe Tennis", country: "Europe", category: "Sports", language: "Multi" },
  { name: "Europe Movies", country: "Europe", category: "Movies", language: "Multi" },
  { name: "Europe Cinema", country: "Europe", category: "Movies", language: "Multi" },
  { name: "Europe Entertainment", country: "Europe", category: "Entertainment", language: "Multi" },
  { name: "Europe News", country: "Europe", category: "News", language: "Multi" },
  { name: "Europe Kids", country: "Europe", category: "Kids", language: "Multi" },
  { name: "Europe Documentary", country: "Europe", category: "Documentary", language: "Multi" },

  // MENA Channels
  { name: "MENA Sports 1", country: "MENA", category: "Sports", language: "Arabic" },
  { name: "MENA Football", country: "MENA", category: "Sports", language: "Arabic" },
  { name: "MENA Movies", country: "MENA", category: "Movies", language: "Arabic" },
  { name: "MENA Cinema", country: "MENA", category: "Movies", language: "Arabic" },
  { name: "MENA Entertainment", country: "MENA", category: "Entertainment", language: "Arabic" },
  { name: "MENA News", country: "MENA", category: "News", language: "Arabic" },
  { name: "MENA Kids", country: "MENA", category: "Kids", language: "Arabic" },
  { name: "MENA Documentary", country: "MENA", category: "Documentary", language: "Arabic" },

  // Asia Channels
  { name: "Asia Sports 1", country: "Asia", category: "Sports", language: "Multi" },
  { name: "Asia Football", country: "Asia", category: "Sports", language: "Multi" },
  { name: "Asia Cricket", country: "Asia", category: "Sports", language: "Multi" },
  { name: "Asia Movies", country: "Asia", category: "Movies", language: "Multi" },
  { name: "Asia Cinema", country: "Asia", category: "Movies", language: "Multi" },
  { name: "Asia Entertainment", country: "Asia", category: "Entertainment", language: "Multi" },
  { name: "Asia News", country: "Asia", category: "News", language: "Multi" },
  { name: "Asia Kids", country: "Asia", category: "Kids", language: "Multi" },
  { name: "Asia Documentary", country: "Asia", category: "Documentary", language: "Multi" },

  // International Channels
  { name: "International Sports Network", country: "International", category: "Sports", language: "English" },
  { name: "International Football HD", country: "International", category: "Sports", language: "English" },
  { name: "International Basketball", country: "International", category: "Sports", language: "English" },
  { name: "International Tennis", country: "International", category: "Sports", language: "English" },
  { name: "International Formula 1", country: "International", category: "Sports", language: "English" },
  { name: "International UFC", country: "International", category: "Sports", language: "English" },
  { name: "International Movies Premium", country: "International", category: "Movies", language: "English" },
  { name: "International Cinema HD", country: "International", category: "Movies", language: "English" },
  { name: "International Action", country: "International", category: "Movies", language: "English" },
  { name: "International Drama", country: "International", category: "Entertainment", language: "English" },
  { name: "International Comedy", country: "International", category: "Entertainment", language: "English" },
  { name: "International Reality", country: "International", category: "Entertainment", language: "English" },
  { name: "International News 24", country: "International", category: "News", language: "English" },
  { name: "International Breaking", country: "International", category: "News", language: "English" },
  { name: "International Kids World", country: "International", category: "Kids", language: "English" },
  { name: "International Animation", country: "International", category: "Kids", language: "English" },
  { name: "International Discovery", country: "International", category: "Documentary", language: "English" },
  { name: "International Nature", country: "International", category: "Documentary", language: "English" },
  { name: "International History", country: "International", category: "Documentary", language: "English" },
  { name: "International Science", country: "International", category: "Documentary", language: "English" },
]

export function getFeaturedChannels(count: number = 12): Channel[] {
  // Return a mix of popular channels from different categories
  const featured = [
    channels.find((c) => c.name === "UK Premier League"),
    channels.find((c) => c.name === "US Sports Network"),
    channels.find((c) => c.name === "International Football HD"),
    channels.find((c) => c.name === "UK Movies Premium"),
    channels.find((c) => c.name === "US Cinema Plus"),
    channels.find((c) => c.name === "UK News 24"),
    channels.find((c) => c.name === "US News Network"),
    channels.find((c) => c.name === "UK Kids Channel"),
    channels.find((c) => c.name === "International Discovery"),
    channels.find((c) => c.name === "UK Drama"),
    channels.find((c) => c.name === "US Comedy Central"),
    channels.find((c) => c.name === "International Formula 1"),
  ].filter((c): c is Channel => c !== undefined)

  return featured.slice(0, count)
}

