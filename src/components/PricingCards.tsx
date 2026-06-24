import { packs } from '@/lib/formations'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { Check } from 'lucide-react'

export function PricingCards() {
  return (
    <section id="packs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            Nos packs
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choisissez votre <GradientText as="span"> formule</GradientText>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Économisez jusqu&apos;à 40% avec nos packs. Toutes les formations sont accessibles à
            vie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                pack.popular
                  ? 'border-accent bg-gradient-to-b from-accent/5 to-surface shadow-xl shadow-accent/10'
                  : 'border-border bg-surface hover:border-accent/30'
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gold">Le plus populaire</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{pack.name}</h3>
                <p className="text-sm text-muted">{pack.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {pack.price === 0 ? '—' : `${pack.price}€`}
                </span>
                {pack.economy > 0 && (
                  <span className="ml-2 text-sm text-accent">Économisez {pack.economy}%</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>
                    {pack.formations} formation{pack.formations > 1 ? 's' : ''} au choix
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Accès à vie</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Mises à jour incluses</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Support prioritaire</span>
                </li>
              </ul>

              <Button variant={pack.popular ? 'primary' : 'outline'} className="w-full">
                {pack.price === 0 ? 'Choisir une formation' : 'Acheter le pack'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
