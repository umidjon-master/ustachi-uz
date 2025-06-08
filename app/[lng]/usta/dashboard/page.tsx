"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, DollarSign, Star, MapPin, Phone, Mail, CheckCircle, XCircle, Eye } from "lucide-react"
import { Header } from "@/components/header"

const stats = [
  {
    title: "Jami Daromad",
    value: "2,847,000 so'm",
    change: "+12%",
    icon: DollarSign,
  },
  {
    title: "Bajarilgan Ishlar",
    value: "156",
    change: "+8%",
    icon: CheckCircle,
  },
  {
    title: "O'rtacha Reyting",
    value: "4.9",
    change: "+0.1",
    icon: Star,
  },
  {
    title: "Javob Vaqti",
    value: "2.3 soat",
    change: "-15%",
    icon: Clock,
  },
]

const pendingOrders = [
  {
    id: "1",
    client: "Aziz Rahimov",
    service: "Elektr Ta'mirlash",
    location: "Toshkent, Chilonzor",
    scheduledTime: "2024-01-16 10:00",
    description: "Oshxonada elektr rozetkasini ta'mirlash kerak",
    budget: "50,000-75,000 so'm",
    status: "pending",
  },
  {
    id: "2",
    client: "Malika Karimova",
    service: "Simlar O'rnatish",
    location: "Toshkent, Yunusabad",
    scheduledTime: "2024-01-17 14:00",
    description: "Uy ofisi uchun yangi simlar o'rnatish",
    budget: "100,000-150,000 so'm",
    status: "pending",
  },
]

const recentJobs = [
  {
    id: "1",
    client: "Bobur Toshev",
    service: "Elektr Ta'mirlash",
    completedDate: "2024-01-15",
    amount: "75,000 so'm",
    rating: 5,
    status: "completed",
  },
  {
    id: "2",
    client: "Dilnoza Alimova",
    service: "Chiroq O'rnatish",
    completedDate: "2024-01-14",
    amount: "45,000 so'm",
    rating: 4,
    status: "completed",
  },
]

export default function ProviderDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const handleAcceptOrder = (id: string) => {
    console.log("Buyurtmani qabul qilish:", id)
  }

  const handleRejectOrder = (id: string) => {
    console.log("Buyurtmani rad etish:", id)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Usta Dashboard</h1>
          <p className="text-muted-foreground">Xizmatlaringiz va buyurtmalaringizni boshqaring</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Umumiy</TabsTrigger>
            <TabsTrigger value="orders">Buyurtmalar</TabsTrigger>
            <TabsTrigger value="schedule">Jadval</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">{stat.change}</span> o'tgan oydan
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Pending Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Yangi Buyurtma So'rovlari</CardTitle>
                <CardDescription>Mijozlar so'rovlarini ko'rib chiqing va javob bering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingOrders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{order.service}</h4>
                          <p className="text-sm text-muted-foreground">Mijoz: {order.client}</p>
                        </div>
                        <Badge variant="outline">{order.status}</Badge>
                      </div>

                      <p className="text-sm">{order.description}</p>

                      <div className="grid md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{order.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{order.scheduledTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>{order.budget}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" onClick={() => handleRejectOrder(order.id)}>
                          <XCircle className="h-4 w-4 mr-1" />
                          Rad Etish
                        </Button>
                        <Button size="sm" onClick={() => handleAcceptOrder(order.id)}>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Qabul Qilish
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4 mr-1" />
                          Batafsil
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>So'nggi Ishlar</CardTitle>
                <CardDescription>Bajarilgan va davom etayotgan loyihalaringiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">Mijoz: {job.client}</p>
                        <p className="text-xs text-muted-foreground">Tugallangan: {job.completedDate}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium">{job.amount}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < job.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <Badge variant="default">Tugallangan</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Jadval Boshqaruvi</CardTitle>
                <CardDescription>Mavjudligingizni va kelgusi uchrashuvlaringizni boshqaring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Kalendar Integratsiyasi</h3>
                  <p className="text-muted-foreground mb-4">
                    Jadvalingizni boshqaring va mijozlar uchun mavjudlikni belgilang
                  </p>
                  <Button>Mavjudlikni Belgilash</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil Ma'lumotlari</CardTitle>
                <CardDescription>Professional profilingizni va xizmatlaringizni yangilang</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="text-lg">AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Ahmad Karimov</h3>
                    <p className="text-muted-foreground">Usta Elektrik</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">4.9</span>
                      <span className="text-sm text-muted-foreground">(127 sharh)</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>ahmad@example.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+998 90 123 45 67</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Toshkent, O'zbekiston</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Xizmatlar:</p>
                    <div className="flex flex-wrap gap-1">
                      {["Elektrik", "Simlar", "O'rnatish", "Ta'mirlash"].map((service) => (
                        <Badge key={service} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button>Profilni Tahrirlash</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
