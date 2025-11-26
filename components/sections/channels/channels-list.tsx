"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { channelRegions, channelRegionRelatedLinks } from "@/content/channels-config"

export function ChannelsList() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const selectedRegion = useMemo(() => {
    if (selectedRegionId === "all") return null
    return channelRegions.find((r) => r.id === selectedRegionId) || null
  }, [selectedRegionId])

  const filteredChannels = useMemo(() => {
    const regionsToSearch = selectedRegion ? [selectedRegion] : channelRegions

    const allChannels: Array<{ channel: string; region: string; category: string }> = []

    regionsToSearch.forEach((region) => {
      region.categories.forEach((category) => {
        category.channels.forEach((channel) => {
          if (!searchQuery || channel.toLowerCase().includes(searchQuery.toLowerCase())) {
            allChannels.push({
              channel,
              region: region.name,
              category: category.name,
            })
          }
        })
      })
    })

    return allChannels
  }, [selectedRegion, searchQuery])

  const displayRegions = useMemo(() => {
    if (selectedRegion) {
      return [selectedRegion]
    }
    return channelRegions
  }, [selectedRegion])

  return (
    <>
      {/* Search and Region Selector */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search channels..."
                className="w-full pl-12 pr-4 py-3 rounded-xl glass-card border border-white/10 bg-white/5 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Region Selector - Horizontal Scroll on Mobile */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max md:flex-wrap">
                <button
                  onClick={() => setSelectedRegionId("all")}
                  className={`px-4 py-2 rounded-lg glass-card border transition-all whitespace-nowrap ${
                    selectedRegionId === "all"
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-white/10 bg-white/5 text-foreground hover:border-primary/30"
                  }`}
                >
                  All
                </button>
                {channelRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`px-4 py-2 rounded-lg glass-card border transition-all whitespace-nowrap flex items-center gap-2 ${
                      selectedRegionId === region.id
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-white/10 bg-white/5 text-foreground hover:border-primary/30"
                    }`}
                  >
                    {region.flagEmoji && <span>{region.flagEmoji}</span>}
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels by Category */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {filteredChannels.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No channels found for this search. Try a different keyword.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedRegionId("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {displayRegions.map((region) => {
                const regionCategories = region.categories.filter((category) => {
                  if (!searchQuery) return true
                  return category.channels.some((channel) =>
                    channel.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                })

                if (regionCategories.length === 0) return null

                return (
                  <div key={region.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      {region.flagEmoji && <span className="text-2xl">{region.flagEmoji}</span>}
                      <h2 className="text-2xl font-bold text-foreground">{region.name}</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {regionCategories.map((category) => {
                        const categoryChannels = category.channels.filter((channel) => {
                          if (!searchQuery) return true
                          return channel.toLowerCase().includes(searchQuery.toLowerCase())
                        })

                        if (categoryChannels.length === 0) return null

                        return (
                          <div
                            key={category.id}
                            className="glass-card border border-white/10 rounded-2xl p-6 bg-card/40 hover:border-primary/30 transition-all"
                          >
                            <h3 className="text-xl font-semibold mb-2 text-foreground">{category.name}</h3>
                            {category.description && (
                              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {categoryChannels.map((channel, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                  {channel}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {(() => {
                      const relatedLinks = channelRegionRelatedLinks[region.id] ?? []
                      return (
                        relatedLinks.length > 0 && (
                          <div className="mt-4 border-t border-white/5 pt-3">
                            <p className="text-xs font-medium text-muted-foreground mb-2">Related pages</p>
                            <div className="flex flex-wrap gap-2">
                              {relatedLinks.map((link) => (
                                <a
                                  key={link.href + link.label}
                                  href={link.href}
                                  className="text-xs text-primary underline underline-offset-4 hover:text-primary/80"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )
                      )
                    })()}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
