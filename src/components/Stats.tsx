'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Élèves formés' },
  { value: 24, suffix: '/7', label: 'Support disponible' },
  { value: 4.8, suffix: '/5', label: 'Avis moyens', decimals: 1 },
  { value: 15, suffix: '+', label: 'Experts contributeurs' },
]

function AnimatedCounter({
  value,
  decimals = 0,
  suffix,
}: {
  value: number
  decimals?: number
  suffix: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref}>
      <div className="text-4xl font-bold text-accent">
        {count.toFixed(decimals)}
        {suffix}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={'decimals' in stat ? stat.decimals : 0}
              />
              <div className="text-muted mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
