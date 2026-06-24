export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  formation: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Alexandre Moreau',
    role: 'CTO, TechFlow',
    avatar: 'AM',
    content:
      'La formation sur les agents IA a transformé notre façon de travailler. Nous avons automatisé 70% de nos tâches répétitives en 2 semaines. Un investissement rentabilisé en 1 mois.',
    rating: 5,
    formation: "Création d'Agents IA",
  },
  {
    name: 'Sophie Lambert',
    role: 'Data Scientist, NeoTech',
    avatar: 'SL',
    content:
      "Le module RAG est tout simplement excellent. Les techniques de chunking et de reranking m'ont permis d'améliorer la précision de nos réponses de 40%. Je recommande vivement.",
    rating: 5,
    formation: 'RAG & Bases Vectorielles',
  },
  {
    name: 'Thomas Petit',
    role: 'Freelance IA',
    avatar: 'TP',
    content:
      "J'ai suivi le pack Ultimate. Chaque formation est concrète, avec des projets réels. Le fine-tuning LLM m'a ouvert des portes que je n'imaginais pas. Le meilleur investissement de ma carrière.",
    rating: 5,
    formation: 'Pack Ultimate',
  },
  {
    name: 'Marie Dubois',
    role: 'Head of Innovation, Groupe BNP',
    avatar: 'MD',
    content:
      'Une approche très professionnelle et pragmatique. Les formateurs maîtrisent leur sujet sur le bout des doigts. Mention spéciale pour le module Prompt Engineering, indispensable.',
    rating: 5,
    formation: 'Prompt Engineering Avancé',
  },
  {
    name: 'Lucas Bernard',
    role: 'Développeur Fullstack',
    avatar: 'LB',
    content:
      "L'automatisation IA avec n8n était exactement ce qu'il me fallait. Les workflows que j'ai créés me font gagner 15h par semaine. Le support est réactif et de qualité.",
    rating: 5,
    formation: 'Automatisation IA',
  },
]
