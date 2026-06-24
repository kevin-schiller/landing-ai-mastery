import Link from 'next/link'

const footerLinks = {
  formations: [
    { label: 'Agents IA', href: '/formations/agents-ia' },
    { label: 'Prompt Engineering', href: '/formations/prompt-engineering' },
    { label: 'RAG & Bases Vectorielles', href: '/formations/rag-bases-vectorielles' },
    { label: 'Automatisation IA', href: '/formations/automatisation-ia' },
    { label: 'Fine-tuning LLM', href: '/formations/fine-tuning-llm' },
  ],
  legal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'CGV', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              AI <span className="text-accent">Mastery</span>
            </Link>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              Des formations IA premium pour les professionnels qui veulent maîtriser les
              technologies de demain.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Formations</h4>
            <ul className="space-y-2">
              {footerLinks.formations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>hello@ai-mastery.fr</li>
              <li>Réponse sous 24h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} AI Mastery. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
