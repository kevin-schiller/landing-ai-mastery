import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commande confirmée',
  description: 'Votre commande a bien été confirmée.',
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle size={48} className="text-accent mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">
          Paiement <GradientText as="span">réussi</GradientText> !
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          Merci pour votre confiance. Vous allez recevoir un email avec vos accès aux formations
          sous quelques minutes.
        </p>
        <Link href="/">
          <Button>Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  )
}
