"use client"

import { motion } from "framer-motion"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, UserCheck, Calendar, Star } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"

const steps = [
  {
    icon: Search,
    title: "Qidirish va Taqqoslash",
    description:
      "Hududingizdagi tasdiqlangan mutaxassislarni ko'ring va ularning profillari, reytinglari va narxlarini taqqoslang.",
    step: "01",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Mutaxassisingizni Tanlang",
    description: "Sharhlar, tajriba va mavjudlik asosida ehtiyojingiz uchun eng yaxshi mutaxassisni tanlang.",
    step: "02",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    icon: Calendar,
    title: "Buyurtma Bering va Vaqt Belgilang",
    description: "Xizmatni buyurtma qiling va siz va mutaxassis uchun qulay vaqtni belgilang.",
    step: "03",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "Baholang va Sharh Qoldiring",
    description: "Ish tugagandan so'ng, tajribangizni baholang va boshqalarga yordam bering.",
    step: "04",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl"
        />
      </div>

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
            Jarayon
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold">UstaTop Qanday Ishlaydi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional yordam olish hech qachon bu qadar oson bo'lmagan. Mahalliy mutaxassislar bilan bog'lanish uchun
            bu oddiy qadamlarni bajaring.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <AnimatedCard
                  delay={index * 0.2}
                  className="text-center h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-500"
                >
                  <CardHeader>
                    <div className="relative mx-auto w-fit">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 bg-gradient-to-br ${step.color} rounded-2xl relative`}
                      >
                        <Icon className={`h-8 w-8 ${step.iconColor}`} />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                        className="absolute -top-2 -right-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                      >
                        {step.step}
                      </motion.div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </AnimatedCard>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 transform -translate-y-1/2 origin-left"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
