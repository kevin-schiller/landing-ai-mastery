export interface Formation {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  price: number
  originalPrice?: number
  lessons: number
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  topics: string[]
  icon: string
  featured?: boolean
}

export const formations: Formation[] = [
  {
    id: 'agents-ia',
    title: "Création d'Agents IA",
    subtitle: 'Concevez des agents autonomes de A à Z',
    description:
      "Apprenez à concevoir, builder et déployer des agents IA autonomes. Maîtrisez les frameworks LangChain, CrewAI et AutoGen pour créer des assistants intelligents capables d'exécuter des tâches complexes.",
    duration: '4 semaines',
    price: 297,
    originalPrice: 397,
    lessons: 24,
    level: 'Intermédiaire',
    topics: [
      'Fondamentaux des agents IA',
      'LangChain & LangGraph',
      'CrewAI (multi-agents)',
      'AutoGen (Microsoft)',
      'Mémoire & outils personnalisés',
      'Déploiement production',
    ],
    icon: '🤖',
    featured: true,
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Avancé',
    subtitle: "Maîtrisez l'art du prompt",
    description:
      'Techniques avancées de prompt engineering : chaînes de prompts, system prompts, few-shot, chain-of-thought. Optimisez vos interactions avec GPT-4, Claude et les modèles open-source.',
    duration: '2 semaines',
    price: 197,
    originalPrice: 247,
    lessons: 14,
    level: 'Débutant',
    topics: [
      'Fondamentaux du prompting',
      'Chain-of-Thought & Tree-of-Thought',
      'Few-shot & Zero-shot',
      'System prompts professionnels',
      'Prompt chaining',
      'Évaluation & testing',
    ],
    icon: '🎯',
  },
  {
    id: 'rag-bases-vectorielles',
    title: 'RAG & Bases Vectorielles',
    subtitle: 'Donnez de la mémoire à vos LLMs',
    description:
      'Implémentez le Retrieval-Augmented Generation pour donner accès à des bases de connaissances à vos modèles. Vector stores, embeddings, chunking stratégique et pipelines RAG complets.',
    duration: '3 semaines',
    price: 247,
    originalPrice: 297,
    lessons: 18,
    level: 'Intermédiaire',
    topics: [
      'Embeddings & vectorisation',
      'Pinecone / Weaviate / Qdrant',
      'Chunking stratégique',
      'RAG avec contexte long',
      'Hybrid search & reranking',
      'Évaluation de qualité RAG',
    ],
    icon: '🔍',
  },
  {
    id: 'automatisation-ia',
    title: 'Automatisation IA',
    subtitle: 'Workflows intelligents sans limite',
    description:
      "Automatisez vos processus métier avec l'IA. n8n, Make, APIs GPT/Claude, création de pipelines complexes. Remplacez des heures de travail manuel par des workflows autonomes.",
    duration: '3 semaines',
    price: 247,
    originalPrice: 297,
    lessons: 20,
    level: 'Débutant',
    topics: [
      'n8n avancé (self-hosted)',
      'Make (ex-Integromat)',
      'APIs OpenAI & Anthropic',
      'Webhooks & triggers',
      'Pipelines documentaires',
      'Monitoring & erreurs',
    ],
    icon: '⚡',
  },
  {
    id: 'fine-tuning-llm',
    title: 'Fine-tuning LLM',
    subtitle: 'Entraînez vos propres modèles',
    description:
      "Maîtrisez le fine-tuning de modèles de langage. LoRA, QLoRA, préparation de datasets, entraînement distribué et déploiement. Obtenez des modèles spécialisés pour vos cas d'usage.",
    duration: '4 semaines',
    price: 347,
    originalPrice: 447,
    lessons: 22,
    level: 'Avancé',
    topics: [
      'LoRA & QLoRA',
      'Préparation de datasets',
      'Unsloth & Axolotl',
      'Entraînement distribué',
      'Évaluation & benchmarks',
      'Déploiement (vLLM, Ollama)',
    ],
    icon: '🧠',
    featured: true,
  },
]

export function getFormationBySlug(slug: string) {
  return formations.find((f) => f.id === slug)
}

export const packs = [
  {
    name: 'Starter',
    description: 'Une formation au choix',
    price: 0,
    formations: 1,
    economy: 0,
    popular: false,
  },
  {
    name: 'Pro',
    description: '3 formations au choix',
    price: 597,
    formations: 3,
    economy: 30,
    popular: true,
  },
  {
    name: 'Ultimate',
    description: 'Accès complet à toutes les formations',
    price: 897,
    formations: 5,
    economy: 40,
    popular: false,
  },
]
