"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Heart, Share2, Star, MapPin, ShoppingCart, Sparkles, Play, Award } from "lucide-react"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    artisan: {
      name: "Meera Devi",
      image: "/indian-woman-artisan-weaver-traditional.jpg",
      region: "Varanasi, India",
      experience: "25 years",
      speciality: "Silk Weaving",
      story:
        "Meera has been weaving Banarasi sarees for over two decades, learning the craft from her grandmother. She leads a collective of 15 women weavers in her village.",
    },
    price: "₹15,000",
    originalPrice: "₹18,000",
    rating: 4.9,
    reviews: 127,
    images: [
      "/beautiful-banarasi-silk-saree-golden-threads-elega.jpg",
      "/banarasi-saree-close-up-golden-zari-work-intricate.jpg",
      "/banarasi-saree-full-length-traditional-indian-wear.jpg",
      "/banarasi-saree-weaving-process-loom-traditional.jpg",
    ],
    tags: ["Textiles", "Silk", "Traditional", "Handwoven"],
    nft: {
      included: true,
      title: "Digital Heritage Card: Banarasi Weaving Tradition",
      description: "Own a piece of digital heritage documenting the 500-year-old Banarasi weaving tradition",
    },
    culturalHistory:
      "Banarasi sarees have been woven in Varanasi for over 500 years. Originally created for Mughal royalty, these sarees are known for their intricate gold and silver brocade work. The art form has been passed down through generations of skilled weavers.",
    craftProcess:
      "Each Banarasi saree takes 15 days to 6 months to complete, depending on the complexity of the design. The process involves setting up the loom, creating the design pattern, and meticulously weaving each thread by hand.",
    impact: {
      weaversSupported: 15,
      hoursOfWork: 720,
      familiesBenefited: 8,
      traditionPreserved: "500+ years",
    },
    specifications: {
      material: "Pure Silk with Gold Zari",
      dimensions: "5.5 meters length",
      weight: "800 grams",
      careInstructions: "Dry clean only",
      origin: "Varanasi, Uttar Pradesh",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/marketplace" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Marketplace</span>
          </Link>
        </div>
      </nav>

      {/* Action Bar */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
                {product.nft.included && (
                  <Badge className="bg-accent text-accent-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    NFT Included
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.artisan.region}
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-primary text-primary-foreground">
                    Save ₹
                    {Number.parseInt(product.originalPrice.replace("₹", "").replace(",", "")) -
                      Number.parseInt(product.price.replace("₹", "").replace(",", ""))}
                  </Badge>
                )}
              </div>
            </div>

            {/* NFT Section */}
            {product.nft.included && (
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent mb-1">{product.nft.title}</h4>
                      <p className="text-sm text-muted-foreground">{product.nft.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Purchase Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Impact Stats */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Your Purchase Impact
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-primary">{product.impact.weaversSupported}</div>
                    <div className="text-muted-foreground">Weavers Supported</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">{product.impact.hoursOfWork}</div>
                    <div className="text-muted-foreground">Hours of Work</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">{product.impact.familiesBenefited}</div>
                    <div className="text-muted-foreground">Families Benefited</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">{product.impact.traditionPreserved}</div>
                    <div className="text-muted-foreground">Tradition Preserved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="story">Artisan Story</TabsTrigger>
              <TabsTrigger value="culture">Cultural History</TabsTrigger>
              <TabsTrigger value="process">Craft Process</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="md:col-span-1">
                  <CardContent className="p-6 text-center">
                    <img
                      src={product.artisan.image || "/placeholder.svg"}
                      alt={product.artisan.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-serif font-semibold text-xl mb-2">{product.artisan.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.artisan.region}
                      </div>
                      <div>{product.artisan.experience} experience</div>
                      <div>Specializes in {product.artisan.speciality}</div>
                    </div>
                  </CardContent>
                </Card>
                <div className="md:col-span-2">
                  <h3 className="font-serif font-semibold text-2xl mb-4">Meet the Artisan</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.artisan.story}</p>
                  <Button variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Artisan Interview
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-8">
              <div className="prose prose-gray max-w-none">
                <h3 className="font-serif font-semibold text-2xl mb-4">Cultural Heritage</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.culturalHistory}</p>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Did You Know?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Banarasi sarees were originally woven for Mughal nobility</li>
                    <li>• The gold and silver threads are called 'zari'</li>
                    <li>• Each saree can contain up to 5,600 threads per inch</li>
                    <li>• The designs often feature Mughal motifs like flowers and leaves</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <div>
                <h3 className="font-serif font-semibold text-2xl mb-4">Craft Process</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.craftProcess}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Process Steps:</h4>
                    <ol className="space-y-2 text-muted-foreground">
                      <li>1. Design creation and pattern planning</li>
                      <li>2. Loom setup and thread preparation</li>
                      <li>3. Zari thread integration</li>
                      <li>4. Hand weaving process</li>
                      <li>5. Quality inspection and finishing</li>
                    </ol>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Time Investment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Design Planning:</span>
                        <span>2-3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loom Setup:</span>
                        <span>1 day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weaving:</span>
                        <span>12-15 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Finishing:</span>
                        <span>1-2 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-4">Product Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Care Instructions</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Dry clean only to preserve the silk and zari work</li>
                    <li>• Store in a cool, dry place away from direct sunlight</li>
                    <li>• Wrap in muslin cloth for long-term storage</li>
                    <li>• Avoid contact with perfumes and deodorants</li>
                    <li>• Handle with clean, dry hands</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
