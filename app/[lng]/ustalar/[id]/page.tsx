"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, CheckCircle, Phone, MessageCircle, Calendar, Clock, Award, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock provider data
const provider = {
  id: "1",
  name: "Ahmad Karimov",
  profession: "Usta Elektrik",
  rating: 4.9,
  reviews: 127,
  location: "Toshkent, Chilonzor",
  services: ["Elektrik", "Simlar", "O'rnatish", "Ta'mirlash"],
  verified: true,
  image: "/placeholder.svg?height=120&width=120",
  price: "50,000 so'm/soat dan",
  description:
    "Uy va tijorat loyihalarida 10+ yillik tajribaga ega professional elektrik. Barcha turdagi elektr ishlarini sifatli va tezkor bajaraman.",
  experience: "10 yil",
  responseTime: "1 soat ichida",
  completedJobs: 234,
  bio: "Men Ahmad Karimov, 10 yildan ortiq vaqtdan beri elektrik sohasida ishlayman. Toshkent shahrida uy va ofis elektr tizimlarini o'rnatish, ta'mirlash va texnik xizmat ko'rsatish bo'yicha keng tajribaga egaman. Mijozlarimning xavfsizligi va qulayligi mening asosiy maqsadim.",
  workingHours: "Dushanba - Shanba: 8:00 - 20:00",
  languages: ["O'zbek", "Rus"],
  certifications: ["Elektrik xavfsizligi sertifikati", "Professional elektrik kurslari"],
}

const reviews = [
  {
    id: "1",
    clientName: "Aziz Rahimov",
    rating: 5,
    comment: "Juda professional va tezkor ish. Elektr muammosini tez hal qildi. Tavsiya qilaman!",
    date: "2024-01-10",
    service: "Elektr ta'mirlash",
  },
  {
    id: "2",
    clientName: "Malika Karimova",
    rating: 5,
    comment: "Uyimizda yangi rozetkalar o'rnatdi. Ish sifatli va vaqtida bajarildi.",
    date: "2024-01-08",
    service: "Rozet o'rnatish",
  },
  {
    id: "3",
    clientName: "Bobur Toshev",
    rating: 4,
    comment: "Yaxshi usta, lekin biroz kech keldi. Ammo ish sifati a'lo.",
    date: "2024-01-05",
    service: "Simlar almashtirish",
  },
]

const portfolio = [
  {
    id: "1",
    title: "Uy elektr tizimi o'rnatish",
    description: "3 xonali uyda to'liq elektr tizimi o'rnatildi",
    image: "/placeholder.svg?height=200&width=300",
    completedDate: "2024-01-12",
  },
  {
    id: "2",
    title: "Ofis yoritish tizimi",
    description: "Zamonaviy LED yoritish tizimi o'rnatildi",
    image: "/placeholder.svg?height=200&width=300",
    completedDate: "2024-01-08",
  },
]

export default function ProviderDetailPage() {
  const params = useParams()
  const { toast } = useToast()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    description: "",
  })

  const handleBooking = () => {
    toast({
      title: "Buyurtma yuborildi!",
      description: "Usta tez orada siz bilan bog'lanadi.",
    })
    setIsBookingOpen(false)
    setBookingData({
      service: "",
      date: "",
      time: "",
      address: "",
      description: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Provider Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                    <AvatarFallback className="text-2xl">
                      {provider.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {provider.verified && (
                    <CheckCircle className="absolute -bottom-1 -right-1 h-6 w-6 text-primary bg-background rounded-full" />
                  )}
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">{provider.name}</h1>
                  <p className="text-lg text-muted-foreground">{provider.profession}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews} sharh)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:ml-auto space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{provider.experience}</p>
                    <p className="text-xs text-muted-foreground">Tajriba</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{provider.completedJobs}</p>
                    <p className="text-xs text-muted-foreground">Bajarilgan</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{provider.responseTime}</p>
                    <p className="text-xs text-muted-foreground">Javob</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">{provider.price}</p>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Qo'ng'iroq
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Xabar
                    </Button>
                  </div>
                  <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Buyurtma Berish
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Xizmat Buyurtma Qilish</DialogTitle>
                        <DialogDescription>
                          {provider.name} dan xizmat buyurtma qilish uchun ma'lumotlarni to'ldiring
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Xizmat Turi</Label>
                          <Select
                            value={bookingData.service}
                            onValueChange={(value) => setBookingData({ ...bookingData, service: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Xizmat turini tanlang" />
                            </SelectTrigger>
                            <SelectContent>
                              {provider.services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Sana</Label>
                            <Input
                              id="date"
                              type="date"
                              value={bookingData.date}
                              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Vaqt</Label>
                            <Input
                              id="time"
                              type="time"
                              value={bookingData.time}
                              onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Manzil</Label>
                          <Input
                            id="address"
                            placeholder="To'liq manzilni kiriting"
                            value={bookingData.address}
                            onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Ish Tavsifi</Label>
                          <Textarea
                            id="description"
                            placeholder="Qanday ish bajarilishi kerakligini batafsil yozing"
                            value={bookingData.description}
                            onChange={(e) => setBookingData({ ...bookingData, description: e.target.value })}
                          />
                        </div>

                        <Button onClick={handleBooking} className="w-full">
                          Buyurtma Yuborish
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Provider Details Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">Haqida</TabsTrigger>
            <TabsTrigger value="reviews">Sharhlar</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="contact">Aloqa</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usta Haqida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{provider.bio}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Ish Vaqti</h4>
                    <p className="text-sm text-muted-foreground">{provider.workingHours}</p>

                    <h4 className="font-medium">Tillar</h4>
                    <div className="flex gap-2">
                      {provider.languages.map((lang) => (
                        <Badge key={lang} variant="outline">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Sertifikatlar</h4>
                    <ul className="space-y-1">
                      {provider.certifications.map((cert, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mijozlar Sharhlari ({reviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{review.clientName}</p>
                        <p className="text-xs text-muted-foreground">
                          {review.service} • {review.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bajarilgan Ishlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolio.map((work) => (
                    <div key={work.id} className="space-y-3">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{work.title}</h4>
                        <p className="text-sm text-muted-foreground">{work.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Tugallangan: {work.completedDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Aloqa Ma'lumotlari</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Joylashuv</p>
                        <p className="text-sm text-muted-foreground">{provider.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Javob Vaqti</p>
                        <p className="text-sm text-muted-foreground">{provider.responseTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Qo'ng'iroq Qilish
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Xabar Yuborish
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
