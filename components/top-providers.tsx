import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

const topProviders = [
  {
    id: "1",
    name: "Ahmad Karimov",
    profession: "Usta Elektrik",
    rating: 4.9,
    reviews: 127,
    location: "Toshkent, Chilonzor",
    services: ["Elektrik", "Simlar", "O'rnatish"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "50,000 so'm/soat dan",
    experience: "10 yil tajriba",
  },
  {
    id: "2",
    name: "Bobur Umarov",
    profession: "Professional Santexnik",
    rating: 4.8,
    reviews: 89,
    location: "Toshkent, Yunusabad",
    services: ["Santexnik", "Quvur Ta'mirlash", "O'rnatish"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "60,000 so'm/soat dan",
    experience: "8 yil tajriba",
  },
  {
    id: "3",
    name: "Dilshod Toshev",
    profession: "Mutaxassis Duradgor",
    rating: 4.9,
    reviews: 156,
    location: "Toshkent, Mirzo Ulug'bek",
    services: ["Duradgorlik", "Mebel", "Ta'mirlash"],
    verified: true,
    image: "/placeholder.svg?height=80&width=80",
    price: "40,000 so'm/soat dan",
    experience: "12 yil tajriba",
  },
]

export function TopProviders() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Eng Yaxshi Reytingga Ega Ustalar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Doimiy ravishda yuqori sifatli xizmat ko'rsatadigan eng yuqori reytingga ega mutaxassislarimiz bilan
            tanishing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProviders.map((provider) => (
            <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="relative mx-auto w-fit">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                    <AvatarFallback className="text-lg">
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
                  <h3 className="font-semibold text-lg">{provider.name}</h3>
                  <p className="text-sm text-muted-foreground">{provider.profession}</p>
                  <p className="text-xs text-muted-foreground">{provider.experience}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
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
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-medium text-primary text-sm">{provider.price}</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3 mr-1" />
                      Qo'ng'iroq
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

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/ustalar">Barcha Ustalarni Ko'rish</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
