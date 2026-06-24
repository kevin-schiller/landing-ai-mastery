import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders Hero section', () => {
    render(<Home />)
    expect(screen.getByText("Maîtrisez l'IA.")).toBeInTheDocument()
  })

  it('renders ProblemSolution section', () => {
    render(<Home />)
    expect(screen.getByText('Le constat est simple')).toBeInTheDocument()
  })

  it('renders FormationGrid section', () => {
    render(<Home />)
    expect(screen.getByText("Création d'Agents IA")).toBeInTheDocument()
  })

  it('renders PricingCards section', () => {
    render(<Home />)
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('renders Stats section', () => {
    render(<Home />)
    const elements = screen.getAllByText('Élèves formés')
    expect(elements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Testimonials section', () => {
    render(<Home />)
    expect(screen.getByText('Ils nous font confiance')).toBeInTheDocument()
  })

  it('renders FAQ section', () => {
    render(<Home />)
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(<Home />)
    expect(screen.getByText(/Prêt à passer au/)).toBeInTheDocument()
  })
})
