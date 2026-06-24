import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/10 to-primary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Prêt à passer au <GradientText as="span">niveau supérieur</GradientText> ?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          Rejoignez une communauté de professionnels qui maîtrisent déjà l&apos;IA. Votre avenir
          commence maintenant.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            Explorer les formations <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  )
}
