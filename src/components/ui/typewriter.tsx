'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypewriterProps {
  text: string
  className?: string
  delay?: number
}

export function Typewriter({ text, className, delay = 0 }: TypewriterProps) {
  const words = text.split(' ')
  
  return (
    <span className={cn('inline-flex flex-wrap gap-x-2', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.1,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
} 