import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { formations, getFormationBySlug } from '@/lib/formations'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Clock, BookOpen, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return formations.map((f) => ({ slug: f.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const formation = getFormationBySlug(slug)

  if (!formation) return {}

  return {
    title: formation.title,
    description: formation.description,
  }
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params
  const formation = getFormationBySlug(slug)

  if (!formation) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Retour aux formations
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{formation.icon}</span>
              <Badge variant="blue">{formation.level}</Badge>
              {formation.featured && <Badge variant="gold">Populaire</Badge>}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{formation.title}</h1>
            <p className="text-lg text-muted mb-6">{formation.subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8">
              <span className="flex items-center gap-1">
                <Clock size={16} /> {formation.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={16} /> {formation.lessons} leçons
              </span>
            </div>

            <p className="text-muted leading-relaxed mb-8">{formation.description}</p>

            <h2 className="text-xl font-semibold mb-4">Au programme de cette formation</h2>
            <ul className="space-y-3 mb-8">
              {formation.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <Check size={18} className="text-accent mt-0.5 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-xl border border-border bg-surface p-6">
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl font-bold">{formation.price}€</span>
                  {formation.originalPrice && (
                    <span className="text-lg text-muted line-through">
                      {formation.originalPrice}€
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">Paiement en 3x sans frais</p>
              </div>

              <Button className="w-full mb-3" size="lg">
                Acheter cette formation
              </Button>
              <Button className="w-full" variant="outline">
                Ajouter au pack Pro
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-3">Cette formation inclut :</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent" /> Accès à vie
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent" /> {formation.lessons} leçons vidéo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent" /> Code source fourni
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent" /> Support prioritaire
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent" /> Certificat de réussite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
