import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, TextIcon as Telegram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-16 mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">UT</span>
              </div>
              <span className="font-bold text-xl">UstaTop</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              O'zbekiston bo'ylab mijozlar va ishonchli mahalliy mutaxassislarni bog'lovchi platforma. Barcha xizmat
              ehtiyojlaringiz uchun tasdiqlangan ustalarni toping.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline">
                <Telegram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tezkor Havolalar</h3>
            <nav className="space-y-2">
              <Link href="/xizmatlar" className="block text-sm text-muted-foreground hover:text-foreground">
                Barcha Xizmatlar
              </Link>
              <Link href="/ustalar" className="block text-sm text-muted-foreground hover:text-foreground">
                Ustalarni Topish
              </Link>
              <Link href="/qanday-ishlaydi" className="block text-sm text-muted-foreground hover:text-foreground">
                Qanday Ishlaydi
              </Link>
              <Link href="/haqida" className="block text-sm text-muted-foreground hover:text-foreground">
                Biz Haqimizda
              </Link>
              <Link href="/aloqa" className="block text-sm text-muted-foreground hover:text-foreground">
                Aloqa
              </Link>
            </nav>
          </div>

          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold">Ustalar Uchun</h3>
            <nav className="space-y-2">
              <Link
                href="/auth/register?type=provider"
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                Usta Sifatida Qo'shilish
              </Link>
              <Link href="/usta/dashboard" className="block text-sm text-muted-foreground hover:text-foreground">
                Usta Dashboard
              </Link>
              <Link href="/yordam/ustalar" className="block text-sm text-muted-foreground hover:text-foreground">
                Ustalar Uchun Yordam
              </Link>
              <Link href="/shartlar" className="block text-sm text-muted-foreground hover:text-foreground">
                Xizmat Shartlari
              </Link>
              <Link href="/maxfiylik" className="block text-sm text-muted-foreground hover:text-foreground">
                Maxfiylik Siyosati
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Bog'lanish</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@ustatop.uz</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Yangiliklar uchun obuna bo'ling</p>
              <div className="flex space-x-2">
                <Input placeholder="Email manzilingizni kiriting" className="flex-1" />
                <Button size="sm">Obuna</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 UstaTop. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
