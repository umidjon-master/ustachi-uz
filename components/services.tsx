"use client"

import { motion } from "framer-motion"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, Hammer, Paintbrush, Droplets, Home, Car, Laptop } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const services = [
  {
    icon: Wrench,
    title: "Santexnik",
    description: "Quvur ta'mirlash, o'rnatish va texnik xizmat",
    providers: 150,
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Elektrik",
    description: "Simlar, o'rnatish va elektr ta'mirlash",
    providers: 120,
    color: "from-yellow-500/10 to-yellow-600/10",
    iconColor: "text-yellow-600",
  },
  {
    icon: Hammer,
    title: "Duradgor",
    description: "Maxsus mebel, ta'mirlash va o'rnatish",
    providers: 90,
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
  },
  {
    icon: Paintbrush,
    title: "Rassomlik",
    description: "Ichki va tashqi bo'yash xizmatlari",
    providers: 80,
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Droplets,
    title: "Tozalash",
    description: "Chuqur tozalash va texnik xizmat",
    providers: 200,
    color: "from-cyan-500/10 to-cyan-600/10",
    iconColor: "text-cyan-600",
  },
  {
    icon: Home,
    title: "Uy Ta'mirlash",
    description: "Umumiy texnik xizmat va ta'mirlash",
    providers: 110,
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    icon: Car,
    title: "Avtomobil Ta'mirlash",
    description: "Transport vositalarini texnik xizmat",
    providers: 75,
    color: "from-red-500/10 to-red-600/10",
    iconColor: "text-red-600",
  },
  {
    icon: Laptop,
    title: "Texnik Yordam",
    description: "Kompyuter va qurilmalar ta'mirlash",
    providers: 60,
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-600",
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4"
          >
            Xizmatlar
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold">Mashhur Xizmatlar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eng ko'p so'raladigan xizmatlarimizni ko'ring va ehtiyojingiz uchun to'g'ri mutaxassisni toping
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedCard
                key={service.title}
                delay={index * 0.1}
                className="group cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-500"
              >
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.6 }}
                    className={`mx-auto p-4 bg-gradient-to-br ${service.color} rounded-2xl w-fit group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${service.iconColor}`} />
                  </motion.div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-sm font-medium text-primary"
                  >
                    {service.providers}+ usta mavjud
                  </motion.p>
                  <AnimatedButton
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <Link href={`/ustalar?xizmat=${service.title.toLowerCase()}`}>
                      {service.title} Ustalarini Topish
                    </Link>
                  </AnimatedButton>
                </CardContent>
              </AnimatedCard>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <AnimatedButton size="lg" className="bg-gradient-to-r from-primary to-primary/90" asChild>
            <Link href="/xizmatlar">Barcha Xizmatlarni Ko'rish</Link>
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
