'use client'

import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/GradientText'
import { Zap, Target, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Zap,
    title: 'Vous êtes submergé',
    description:
      "L'IA évolue si vite qu'il est difficile de savoir par où commencer. Tutoriels épars, outils changeants, information pléthorique.",
  },
  {
    icon: Target,
    title: 'Notre méthode pas-à-pas',
    description:
      'Un parcours structuré, des projets concrets, un accompagnement expert. Vous apprenez en faisant, pas en regardant.',
  },
  {
    icon: TrendingUp,
    title: 'Des résultats immédiats',
    description:
      "Dès la première semaine, vous produisez des résultats tangibles. Automatisez, innovez et passez à l'échelle.",
  },
]

export function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Le constat est simple</h2>
          <p className="text-muted max-w-2xl mx-auto">
            <GradientText as="span">95% des professionnels</GradientText> savent que l&apos;IA va
            transformer leur métier. Seuls 12% passent à l&apos;action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="rounded-xl border border-border bg-surface p-8 hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 text-accent/30 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
