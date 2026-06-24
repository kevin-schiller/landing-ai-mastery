'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quels sont les prérequis pour suivre ces formations ?',
    answer:
      "Pour les formations Débutant (Prompt Engineering, Automatisation), aucune connaissance en IA n'est requise. Pour les niveaux Intermédiaire et Avancé, une familiarité avec Python et les concepts de base de l'IA est recommandée. Chaque formation précise ses prérequis sur sa page dédiée.",
  },
  {
    question: 'Comment se déroule une formation ?',
    answer:
      "Chaque formation est composée de modules vidéo, de projets pratiques, de code source complet et d'exercices. Vous progressez à votre rythme avec un accès à vie. Un support dédié répond à vos questions sous 24h ouvrées.",
  },
  {
    question: 'Y a-t-il une garantie satisfait ou remboursé ?',
    answer:
      'Oui, nous offrons une garantie satisfait ou remboursé de 14 jours. Si la formation ne correspond pas à vos attentes, nous vous remboursons intégralement, sans question.',
  },
  {
    question: "Puis-je acheter les formations à l'unité ?",
    answer:
      "Oui, chaque formation est disponible à l'unité. Mais nos packs Pro et Ultimate vous permettent d'économiser jusqu'à 40% si vous voulez suivre plusieurs cursus.",
  },
  {
    question: 'Les formations sont-elles mises à jour ?',
    answer:
      "Absolument. Le domaine de l'IA évolue rapidement, nous mettons à jour nos formations en continu. Et comme vous avez un accès à vie, vous bénéficiez de toutes les mises à jour gratuitement.",
  },
  {
    question: 'Y a-t-il un certificat à la fin ?',
    answer:
      'Oui, chaque formation délivre un certificat de réussite reconnaissant les compétences acquises. Idéal pour votre CV ou votre profil LinkedIn.',
  },
  {
    question: 'Puisz-vous payer en plusieurs fois ?',
    answer:
      'Oui, nous proposons le paiement en 3 ou 4 fois sans frais via Stripe. Disponible pour toutes les formations et packs.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted pb-5 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted">Tout ce que vous devez savoir avant de commencer.</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
