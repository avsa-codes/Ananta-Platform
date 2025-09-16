"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, X, Star, MapPin, Sparkles, Eye, ShoppingCart } from "lucide-react"

const sampleProducts = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    artisan: "Meera Devi",
    region: "Varanasi, India",
    price: "₹15,000",
    rating: 4.9,
    reviews: 127,
    image: "/beautiful-banarasi-silk-saree-golden-threads-elega.jpg",
    story:
      "This exquisite saree represents 500 years of Banarasi weaving tradition, with intricate gold zari work that takes 3 months to complete.",
    tags: ["Textiles", "Silk", "Traditional"],
    nft: true,
    culturalHistory: "Banarasi sarees have been worn by Indian royalty for centuries, symbolizing grace and tradition.",
  },
  {
    id: 2,
    name: "Blue Pottery Vase Set",
    artisan: "Rajesh Kumar",
    region: "Jaipur, India",
    price: "₹3,500",
    rating: 4.8,
    reviews: 89,
    image: "/blue-pottery-vase-jaipur-traditional-ceramic-decor.jpg",
    story:
      "Crafted using the ancient Persian technique, this blue pottery is made without clay, using quartz stone powder.",
    tags: ["Pottery", "Ceramic", "Home Decor"],
    nft: false,
    culturalHistory:
      "Blue pottery came to India through Persian artisans and flourished in Jaipur under royal patronage.",
  },
  {
    id: 3,
    name: "Warli Tribal Painting",
    artisan: "Tribal Art Collective",
    region: "Maharashtra, India",
    price: "₹2,800",
    rating: 4.7,
    reviews: 156,
    image: "/warli-tribal-painting-traditional-art-white-brown-.jpg",
    story:
      "This painting tells the story of harvest celebrations, painted by tribal women using rice paste and natural pigments.",
    tags: ["Paintings", "Tribal Art", "Wall Art"],
    nft: true,
    culturalHistory: "Warli art dates back to 2500 BCE, depicting the harmony between humans and nature.",
  },
]

export function SwipeDiscovery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const currentProduct = sampleProducts[currentIndex]

  const handleSwipe = (direction: "left" | "right") => {
    if (isAnimating) return

    setIsAnimating(true)

    // Animate card out
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${direction === "right" ? "100%" : "-100%"}) rotate(${direction === "right" ? "15deg" : "-15deg"})`
      cardRef.current.style.opacity = "0"
    }

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleProducts.length)
      setIsAnimating(false)
      setShowDetails(false)

      // Reset card position
      if (cardRef.current) {
        cardRef.current.style.transform = "translateX(0) rotate(0)"
        cardRef.current.style.opacity = "1"
      }
    }, 300)
  }

  if (!currentProduct) return null

  return (
    <div className="relative">
      {/* Swipe Card */}
      <div className="relative h-[600px] perspective-1000">
        <Card
          ref={cardRef}
          className="absolute inset-0 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative h-full">
            <img
              src={currentProduct.image || "/placeholder.svg"}
              alt={currentProduct.name}
              className="w-full h-2/3 object-cover"
            />

            {/* Overlay Badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              {currentProduct.nft && (
                <Badge className="bg-accent text-accent-foreground">
                  <Sparkles className="w-3 h-3 mr-1" />
                  NFT Included
                </Badge>
              )}
              <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{currentProduct.rating}</span>
                <span>({currentProduct.reviews})</span>
              </div>
            </div>

            {/* Product Info */}
            <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6">
              <div className="flex flex-wrap gap-1 mb-2">
                {currentProduct.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="font-serif font-bold text-xl mb-1">{currentProduct.name}</h2>

              <p className="text-muted-foreground mb-2">by {currentProduct.artisan}</p>

              <div className="flex items-center text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {currentProduct.region}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-2xl text-primary">{currentProduct.price}</span>
                <Button variant="outline" size="sm" onClick={() => setShowDetails(!showDetails)}>
                  <Eye className="w-4 h-4 mr-2" />
                  {showDetails ? "Hide" : "View"} Story
                </Button>
              </div>

              {/* Expandable Story Section */}
              {showDetails && (
                <div className="bg-muted/50 rounded-lg p-4 mb-4 animate-in slide-in-from-bottom-2">
                  <h4 className="font-semibold mb-2">Artisan Story</h4>
                  <p className="text-sm text-muted-foreground mb-3">{currentProduct.story}</p>
                  <h4 className="font-semibold mb-2">Cultural History</h4>
                  <p className="text-sm text-muted-foreground">{currentProduct.culturalHistory}</p>
                </div>
              )}
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 mt-8">
        <Button
          variant="outline"
          size="lg"
          className="w-16 h-16 rounded-full border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
          onClick={() => handleSwipe("left")}
          disabled={isAnimating}
        >
          <X className="w-6 h-6" />
        </Button>

        <Button size="lg" className="px-8 bg-primary hover:bg-primary/90" disabled={isAnimating}>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-16 h-16 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          onClick={() => handleSwipe("right")}
          disabled={isAnimating}
        >
          <Heart className="w-6 h-6" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {sampleProducts.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 text-sm text-muted-foreground">
        <p>Swipe right to love ❤️ • Swipe left to pass ✕</p>
      </div>
    </div>
  )
}
