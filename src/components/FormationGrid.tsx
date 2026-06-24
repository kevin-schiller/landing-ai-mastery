import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { formations, type Formation } from '@/lib/formations'
import { Clock, BookOpen, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

function FormationCard({ formation }: { formation: Formation }) {
  return (
    <Link href={`/formations/${formation.id}`}>
      <div className="group relative rounded-xl border border-border bg-surface hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 overflow-hidden">
        {formation.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="gold">Populaire</Badge>
          </div>
        )}

        <div className="p-8">
          <div className="text-4xl mb-4">{formation.icon}</div>

          <h3 className="text-xl font-semibold mb-1">{formation.title}</h3>
          <p className="text-sm text-muted mb-3">{formation.subtitle}</p>

          <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-2">
            {formation.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {formation.topics.slice(0, 3).map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
            {formation.topics.length > 3 && <Badge>+{formation.topics.length - 3}</Badge>}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted mb-6">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {formation.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={14} /> {formation.lessons} leçons
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} /> {formation.level}
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{formation.price}€</span>
              {formation.originalPrice && (
                <span className="text-sm text-muted line-through">{formation.originalPrice}€</span>
              )}
            </div>
            <span className="flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              Voir la formation <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function FormationGrid() {
  return (
    <section id="formations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">
            Nos formations
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Des formations pensées pour <GradientText as="span">l&apos;action</GradientText>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Chaque cursus est conçu avec des professionnels du secteur. Projets concrets, code
            fourni, support dédié.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
      </div>
    </section>
  )
}
