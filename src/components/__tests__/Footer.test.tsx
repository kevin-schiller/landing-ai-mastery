import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(
      screen.getByText((content) => content.includes('AI') && content.includes('Mastery')),
    ).toBeInTheDocument()
  })

  it('renders all formation links', () => {
    render(<Footer />)
    expect(screen.getByText('Agents IA')).toBeInTheDocument()
    expect(screen.getByText('Prompt Engineering')).toBeInTheDocument()
    expect(screen.getByText('RAG & Bases Vectorielles')).toBeInTheDocument()
    expect(screen.getByText('Automatisation IA')).toBeInTheDocument()
    expect(screen.getByText('Fine-tuning LLM')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Mentions légales')).toBeInTheDocument()
    expect(screen.getByText('CGV')).toBeInTheDocument()
    expect(screen.getByText('Politique de confidentialité')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('hello@ai-mastery.fr')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })
})
