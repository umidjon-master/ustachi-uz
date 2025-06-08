'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { Card, type CardProps } from '@/components/ui/card'
import { forwardRef } from 'react'

interface AnimatedCardProps extends CardProps {
	children: React.ReactNode
	delay?: number
	className?: string // Add this line
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
	({ children, className, delay = 0, ...props }, ref) => {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay,
					type: 'spring',
					stiffness: 100,
				}}
				whileHover={{
					y: -4,
					transition: { duration: 0.2 },
				}}
			>
				<Card
					ref={ref}
					className={`transition-shadow duration-300 hover:shadow-lg ${className}`}
					{...props}
				>
					{children}
				</Card>
			</motion.div>
		)
	}
)

AnimatedCard.displayName = 'AnimatedCard'
