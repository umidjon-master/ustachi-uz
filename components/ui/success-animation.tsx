"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SuccessAnimationProps {
  show: boolean
  message?: string
}

export function SuccessAnimation({ show, message }: SuccessAnimationProps) {
  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-background p-8 rounded-2xl shadow-xl text-center max-w-sm mx-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg font-semibold mb-2"
        >
          Muvaffaqiyatli!
        </motion.h3>
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}
