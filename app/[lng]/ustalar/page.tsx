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
import { Search, MapPin, Star, CheckCircle, Filter, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

const providers = [
  {
    id: "1",
    name: "Ahmad Karimov",
    profession: "Usta Elektrik",
    rating: 4.9,
    reviews: 127,
    location: "Toshkent, Chilonzor",
    distance: "2.5 km",
    services: ["Elektrik", "Simlar", "O'rnatish"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "50,000 so'm/soat dan",
    description: "Uy va tijorat loyihalarida 10+ yillik tajribaga ega professional elektrik.",
    experience: "10 yil",
    responseTime: "1 soat ichida",
  },
  {
    id: "2",
    name: "Bobur Umarov",
    profession: "Professional Santexnik",
    rating: 4.8,
    reviews: 89,
    location: "Toshkent, Yunusabad",
    distance: "3.2 km",
    services: ["Santexnik", "Quvur Ta'mirlash", "O'rnatish"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "60,000 so'm/soat dan",
    description: "Shoshilinch ta'mirlash va hammom renovatsiyasi bo'yicha mutaxassis santexnik.",
    experience: "8 yil",
    responseTime: "30 daqiqa ichida",
  },
  {
    id: "3",
    name: "Dilshod Toshev",
    profession: "Mutaxassis Duradgor",
    rating: 4.9,
    reviews: 156,
    location: "Toshkent, Mirzo Ulug'bek",
    distance: "1.8 km",
    services: ["Duradgorlik", "Mebel", "Ta'mirlash"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "40,000 so'm/soat dan",
    description: "Maxsus mebel yaratish va barcha yog'och ishlari bo'yicha malakali duradgor.",
    experience: "12 yil",
    responseTime: "2 soat ichida",
  },
  {
    id: "4",
    name: "Sardor Alimov",
    profession: "Uy Rassomi",
    rating: 4.7,
    reviews: 73,
    location: "Toshkent, Shayxontohur",
    distance: "4.1 km",
    services: ["Rassomlik", "Ichki Dizayn", "Devor Qog'ozi"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "35,000 so'm/soat dan",
    description: "Ichki va tashqi bo'yash loyihalari bo'yicha tajribali rassom.",
    experience: "6 yil",
    responseTime: "1 soat ichida",
  },
  {
    id: "5",
    name: "Jasur Rahmonov",
    profession: "Tozalash Xizmati",
    rating: 4.6,
    reviews: 92,
    location: "Toshkent, Olmazor",
    distance: "5.3 km",
    services: ["Tozalash", "Chuqur Tozalash", "Oyna Tozalash"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "25,000 so'm/soat dan",
    description: "Professional tozalash va texnik xizmat ko'rsatish.",
    experience: "5 yil",
    responseTime: "45 daqiqa ichida",
  },
]

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [sortBy, setSortBy] = useState("rating")

  const services = ["Barcha Xizmatlar", "Elektrik", "Santexnik", "Duradgorlik", "Rassomlik", "Tozalash", "Ta'mirlash"]
  const locations = ["Barcha Hududlar", "Chilonzor", "Yunusabad", "Mirzo Ulug'bek", "Shayxontohur", "Olmazor"]

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
                placeholder="Ustalarni qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Xizmat turi" />
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
                <SelectValue placeholder="Hudud" />
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
                <SelectValue placeholder="Saralash" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Eng Yuqori Reyting</SelectItem>
                <SelectItem value="reviews">Eng Ko'p Sharh</SelectItem>
                <SelectItem value="distance">Eng Yaqin</SelectItem>
                <SelectItem value="price">Eng Arzon</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Hududingizda {providers.length} ta usta topildi</p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Ko'proq Filtrlar
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
                        <p className="text-xs text-muted-foreground">{provider.experience} tajriba</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">({provider.reviews} sharh)</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{provider.location}</span>
                      </div>
                      <span>•</span>
                      <span>{provider.distance} uzoqlikda</span>
                    </div>

                    <div className="text-xs text-muted-foreground">Javob berish: {provider.responseTime}</div>
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
                      <Phone className="h-3 w-3 mr-1" />
                      Qo'ng'iroq
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Xabar
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/ustalar/${provider.id}`}>Profil</Link>
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
            Ko'proq Ustalarni Yuklash
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
