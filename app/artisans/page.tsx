"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, MapPin, Star, Award, Users, Heart, Eye, Sparkles } from "lucide-react"
import Link from "next/link"
import { RegionMap } from "@/components/region-map"

export default function ArtisansPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"map" | "grid">("map")

  const artisans = [
    {
      id: 1,
      name: "Meera Devi",
      speciality: "Banarasi Silk Weaving",
      region: "Varanasi, Uttar Pradesh",
      experience: "25 years",
      rating: 4.9,
      reviews: 127,
      image: "/indian-woman-artisan-weaver-traditional.jpg",
      story: "Master weaver preserving 500-year-old Banarasi tradition",
      impact: {
        womenEmpowered: 15,
        productsCreated: 450,
        incomeGenerated: "₹12L",
        yearsActive: 25,
      },
      badges: ["Master Craftsperson", "Women Empowerment Leader", "Heritage Keeper"],
      products: 23,
      followers: 1240,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      speciality: "Blue Pottery",
      region: "Jaipur, Rajasthan",
      experience: "18 years",
      rating: 4.8,
      reviews: 89,
      image: "/indian-male-potter-blue-pottery-traditional.jpg",
      story: "Reviving the ancient Persian art of blue pottery in Jaipur",
      impact: {
        womenEmpowered: 8,
        productsCreated: 320,
        incomeGenerated: "₹8L",
        yearsActive: 18,
      },
      badges: ["Innovation Leader", "Cultural Revivalist"],
      products: 45,
      followers: 890,
    },
    {
      id: 3,
      name: "Tribal Art Collective",
      speciality: "Warli Painting",
      region: "Thane, Maharashtra",
      experience: "Generational",
      rating: 4.7,
      reviews: 156,
      image: "/tribal-women-warli-painting-traditional-art.jpg",
      story: "Preserving ancient tribal stories through traditional Warli art",
      impact: {
        womenEmpowered: 25,
        productsCreated: 180,
        incomeGenerated: "₹6L",
        yearsActive: 50,
      },
      badges: ["Tribal Heritage", "Community Leader", "Storyteller"],
      products: 67,
      followers: 2100,
    },
    {
      id: 4,
      name: "Fatima Begum",
      speciality: "Kashmiri Pashmina",
      region: "Srinagar, Kashmir",
      experience: "30 years",
      rating: 4.9,
      reviews: 203,
      image: "/kashmiri-woman-pashmina-weaver-traditional.jpg",
      story: "Keeping alive the luxury craft of Kashmiri Pashmina weaving",
      impact: {
        womenEmpowered: 12,
        productsCreated: 280,
        incomeGenerated: "₹15L",
        yearsActive: 30,
      },
      badges: ["Luxury Craftsperson", "Master Weaver", "Cultural Ambassador"],
      products: 34,
      followers: 1560,
    },
  ]

  const ngos = [
    {
      id: 1,
      name: "Craft Revival Trust",
      focus: "Traditional Crafts Preservation",
      region: "Pan India",
      established: "1982",
      rating: 4.9,
      reviews: 245,
      image: "/ngo-craft-revival-trust-traditional-crafts.jpg",
      mission: "Preserving and promoting traditional Indian crafts and artisans",
      impact: {
        artisansSupported: 2500,
        craftsRevived: 45,
        incomeGenerated: "₹50Cr",
        yearsActive: 42,
      },
      badges: ["Heritage Preservation", "Artisan Empowerment", "Cultural Documentation"],
      artisans: 156,
      followers: 8900,
    },
    {
      id: 2,
      name: "Dastkar",
      focus: "Rural Artisan Development",
      region: "Delhi & Rural India",
      established: "1981",
      rating: 4.8,
      reviews: 189,
      image: "/ngo-dastkar-rural-artisan-development.jpg",
      mission: "Supporting rural artisans through design development and market linkages",
      impact: {
        artisansSupported: 1800,
        craftsRevived: 32,
        incomeGenerated: "₹35Cr",
        yearsActive: 43,
      },
      badges: ["Rural Development", "Design Innovation", "Market Linkage"],
      artisans: 234,
      followers: 6700,
    },
  ]

  const filteredArtisans = selectedRegion
    ? artisans.filter((artisan) => artisan.region.includes(selectedRegion))
    : artisans

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-2xl font-serif font-bold text-foreground">Ananta</span>
            </Link>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search artisans, crafts, regions..." className="pl-10 bg-muted/50" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant={viewMode === "map" ? "default" : "outline"} size="sm" onClick={() => setViewMode("map")}>
              Map View
            </Button>
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              Grid View
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="artisans" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Artisans & NGOs</h1>
              <p className="text-muted-foreground">
                Meet the talented artisans and organizations preserving cultural heritage
              </p>
            </div>
            <TabsList className="grid w-48 grid-cols-2">
              <TabsTrigger value="artisans">Artisans</TabsTrigger>
              <TabsTrigger value="ngos">NGOs</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="artisans">
            {viewMode === "map" ? (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <RegionMap artisans={artisans} selectedRegion={selectedRegion} onRegionSelect={setSelectedRegion} />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-xl">
                    {selectedRegion ? `Artisans in ${selectedRegion}` : "All Artisans"}
                  </h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {filteredArtisans.map((artisan) => (
                      <ArtisanCard key={artisan.id} artisan={artisan} compact />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artisans.map((artisan) => (
                  <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="ngos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ngos.map((ngo) => (
                <NGOCard key={ngo.id} ngo={ngo} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ArtisanCard({ artisan, compact = false }: { artisan: any; compact?: boolean }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={artisan.image || "/placeholder.svg"}
          alt={artisan.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            compact ? "h-32" : "h-48"
          }`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className={compact ? "p-4" : "p-6"}>
        <div className="flex flex-wrap gap-1 mb-3">
          {artisan.badges.slice(0, compact ? 1 : 3).map((badge: string) => (
            <Badge key={badge} variant="outline" className="text-xs">
              {badge}
            </Badge>
          ))}
        </div>

        <h3 className={`font-serif font-semibold mb-1 ${compact ? "text-base" : "text-lg"}`}>{artisan.name}</h3>

        <p className={`text-muted-foreground mb-2 ${compact ? "text-xs" : "text-sm"}`}>{artisan.speciality}</p>

        <div className={`flex items-center text-muted-foreground mb-3 ${compact ? "text-xs" : "text-sm"}`}>
          <MapPin className="w-3 h-3 mr-1" />
          {artisan.region}
        </div>

        {!compact && <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artisan.story}</p>}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>{artisan.rating}</span>
            <span className={`text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>({artisan.reviews})</span>
          </div>
          <div className={`text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>{artisan.experience}</div>
        </div>

        {!compact && (
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-primary">{artisan.impact.womenEmpowered}</div>
              <div className="text-xs text-muted-foreground">Women Empowered</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary">{artisan.products}</div>
              <div className="text-xs text-muted-foreground">Products</div>
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <Button className="flex-1" size={compact ? "sm" : "default"}>
            View Profile
          </Button>
          <Button variant="outline" size={compact ? "sm" : "default"}>
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function NGOCard({ ngo }: { ngo: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={ngo.image || "/placeholder.svg"}
          alt={ngo.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-secondary text-secondary-foreground">
            <Award className="w-3 h-3 mr-1" />
            NGO Partner
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          {ngo.badges.map((badge: string) => (
            <Badge key={badge} variant="outline" className="text-xs">
              {badge}
            </Badge>
          ))}
        </div>

        <h3 className="font-serif font-semibold text-lg mb-1">{ngo.name}</h3>

        <p className="text-sm text-muted-foreground mb-2">{ngo.focus}</p>

        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="w-3 h-3 mr-1" />
          {ngo.region}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{ngo.mission}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{ngo.rating}</span>
            <span className="text-sm text-muted-foreground">({ngo.reviews})</span>
          </div>
          <div className="text-sm text-muted-foreground">Est. {ngo.established}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-primary">{ngo.impact.artisansSupported}</div>
            <div className="text-xs text-muted-foreground">Artisans Supported</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-primary">{ngo.artisans}</div>
            <div className="text-xs text-muted-foreground">Active Artisans</div>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1">View Profile</Button>
          <Button variant="outline">
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
