"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, CheckCircle, Filter } from "lucide-react"
import Link from "next/link"

const providers = [
  {
    id: "1",
    name: "Ahmad Karimov",
    profession: "Master Electrician",
    rating: 4.9,
    reviews: 127,
    location: "Tashkent",
    distance: "2.5 km",
    services: ["Electrical", "Wiring", "Installation"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "From $25/hour",
    description: "Professional electrician with 10+ years of experience in residential and commercial projects.",
  },
  {
    id: "2",
    name: "Bobur Umarov",
    profession: "Professional Plumber",
    rating: 4.8,
    reviews: 89,
    location: "Tashkent",
    distance: "3.2 km",
    services: ["Plumbing", "Pipe Repair", "Installation"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "From $30/hour",
    description: "Expert plumber specializing in emergency repairs and bathroom renovations.",
  },
  {
    id: "3",
    name: "Dilshod Toshev",
    profession: "Expert Carpenter",
    rating: 4.9,
    reviews: 156,
    location: "Tashkent",
    distance: "1.8 km",
    services: ["Carpentry", "Furniture", "Repair"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "From $20/hour",
    description: "Skilled carpenter creating custom furniture and handling all woodworking projects.",
  },
  {
    id: "4",
    name: "Sardor Alimov",
    profession: "House Painter",
    rating: 4.7,
    reviews: 73,
    location: "Tashkent",
    distance: "4.1 km",
    services: ["Painting", "Interior Design", "Wallpaper"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "From $15/hour",
    description: "Professional painter with expertise in interior and exterior painting projects.",
  },
]

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [sortBy, setSortBy] = useState("rating")

  const services = ["All Services", "Electrical", "Plumbing", "Carpentry", "Painting", "Cleaning", "Repair"]
  const locations = ["All Locations", "Tashkent", "Samarkand", "Bukhara", "Andijan"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-lg mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search professionals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Service type" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Found {providers.length} professionals in your area</p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Providers Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {providers.map((provider) => (
            <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                      <AvatarFallback className="text-lg">
                        {provider.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {provider.verified && (
                      <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-primary bg-background rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{provider.name}</h3>
                        <p className="text-sm text-muted-foreground">{provider.profession}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">({provider.reviews} reviews)</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{provider.location}</span>
                      </div>
                      <span>•</span>
                      <span>{provider.distance} away</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{provider.description}</p>

                <div className="flex flex-wrap gap-1">
                  {provider.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-medium text-primary">{provider.price}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/providers/${provider.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Professionals
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
