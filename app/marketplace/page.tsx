"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Filter, Search, MapPin, Star, Eye, ShoppingCart, Sparkles, Heart, ArrowLeft } from "lucide-react"
import { SwipeDiscovery } from "@/components/swipe-discovery"
import { ProductFilters } from "@/components/product-filters"
import Link from "next/link"

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"swipe" | "grid">("swipe")
  const [showFilters, setShowFilters] = useState(false)

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
              <Input placeholder="Search crafts, regions, artisans..." className="pl-10 bg-muted/50" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant={viewMode === "swipe" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("swipe")}
            >
              Swipe Mode
            </Button>
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              Grid View
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </nav>

      {/* Filters Panel */}
      {showFilters && (
        <div className="border-b border-border bg-muted/30 p-4">
          <ProductFilters />
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {viewMode === "swipe" ? (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Discover Cultural Treasures</h1>
              <p className="text-muted-foreground">
                Swipe right to love, left to pass. Find your perfect cultural piece.
              </p>
            </div>
            <SwipeDiscovery />
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Cultural Marketplace</h1>
                <p className="text-muted-foreground">
                  Discover authentic handcrafted treasures from artisans worldwide
                </p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                2,847 Products Available
              </Badge>
            </div>

            <ProductGrid />
          </div>
        )}
      </main>
    </div>
  )
}

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Handwoven Banarasi Silk Saree",
      artisan: "Meera Devi",
      region: "Varanasi, India",
      price: "₹15,000",
      originalPrice: "₹18,000",
      rating: 4.9,
      reviews: 127,
      image: "/beautiful-banarasi-silk-saree-golden-threads.jpg",
      tags: ["Textiles", "Silk", "Traditional"],
      nft: true,
    },
    {
      id: 2,
      name: "Blue Pottery Vase Set",
      artisan: "Rajesh Kumar",
      region: "Jaipur, India",
      price: "₹3,500",
      rating: 4.8,
      reviews: 89,
      image: "/blue-pottery-vase-jaipur-traditional-ceramic.jpg",
      tags: ["Pottery", "Ceramic", "Home Decor"],
      nft: false,
    },
    {
      id: 3,
      name: "Warli Tribal Painting",
      artisan: "Tribal Art Collective",
      region: "Maharashtra, India",
      price: "₹2,800",
      rating: 4.7,
      reviews: 156,
      image: "/warli-tribal-painting-traditional-art-white-brown.jpg",
      tags: ["Paintings", "Tribal Art", "Wall Art"],
      nft: true,
    },
    {
      id: 4,
      name: "Kashmiri Pashmina Shawl",
      artisan: "Fatima Begum",
      region: "Kashmir, India",
      price: "₹8,500",
      originalPrice: "₹10,000",
      rating: 4.9,
      reviews: 203,
      image: "/kashmiri-pashmina-shawl-soft-luxury-traditional.jpg",
      tags: ["Textiles", "Pashmina", "Luxury"],
      nft: true,
    },
    {
      id: 5,
      name: "Madhubani Art Canvas",
      artisan: "Sita Kumari",
      region: "Bihar, India",
      price: "₹1,200",
      rating: 4.6,
      reviews: 78,
      image: "/madhubani-painting-colorful-traditional-folk-art.jpg",
      tags: ["Paintings", "Folk Art", "Canvas"],
      nft: false,
    },
    {
      id: 6,
      name: "Terracotta Jewelry Set",
      artisan: "Craft Women Collective",
      region: "West Bengal, India",
      price: "₹950",
      rating: 4.5,
      reviews: 92,
      image: "/terracotta-jewelry-earrings-necklace-traditional.jpg",
      tags: ["Jewelry", "Terracotta", "Handmade"],
      nft: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.nft && (
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                NFT
              </Badge>
            )}
            {product.originalPrice && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Sale</Badge>
            )}
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

          <CardContent className="p-4">
            <div className="flex flex-wrap gap-1 mb-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>

            <p className="text-sm text-muted-foreground mb-2">by {product.artisan}</p>

            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <MapPin className="w-3 h-3 mr-1" />
              {product.region}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews})</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
