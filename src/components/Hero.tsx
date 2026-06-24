'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { CybercoreBackground } from '@/components/CybercoreBackground'
import { ArrowRight, Sparkles } from 'lucide-react'

function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <CybercoreBackground beamCount={60} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm text-accent">
            <Sparkles size={14} />
            Formation premium — places limitées
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Maîtrisez l&apos;IA.
          <br />
          <GradientText>Construisez l&apos;avenir.</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted max-w-2xl mx-auto mb-10"
        >
          Des formations complètes et pratiques pour maîtriser la création d&apos;agents IA, le
          prompt engineering avancé, le RAG, l&apos;automatisation et le fine-tuning. Par des
          professionnels, pour des professionnels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2">
            Explorer les formations <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            Voir les packs
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div>Élèves formés</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">4.8/5</div>
            <div>Avis moyens</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">5</div>
            <div>Formations</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
