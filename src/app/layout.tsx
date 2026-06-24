import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | AI Mastery',
    default: 'AI Mastery — Formations IA Premium',
  },
  description:
    "Maîtrisez l'IA avec nos formations premium : Création d'agents, Prompt Engineering, RAG, Automatisation et Fine-tuning.",
  openGraph: {
    title: 'AI Mastery — Formations IA Premium',
    description:
      "Maîtrisez l'IA avec nos formations premium : Création d'agents, Prompt Engineering, RAG, Automatisation et Fine-tuning.",
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
