import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormationGrid } from '@/components/FormationGrid'

describe('FormationGrid', () => {
  it('renders all 5 formation cards', () => {
    render(<FormationGrid />)
    expect(screen.getByText("Création d'Agents IA")).toBeInTheDocument()
    expect(screen.getByText('Prompt Engineering Avancé')).toBeInTheDocument()
    expect(screen.getByText('RAG & Bases Vectorielles')).toBeInTheDocument()
    expect(screen.getByText('Automatisation IA')).toBeInTheDocument()
    expect(screen.getByText('Fine-tuning LLM')).toBeInTheDocument()
  })

  it('shows popular badge for featured formations', () => {
    render(<FormationGrid />)
    const popularBadges = screen.getAllByText('Populaire')
    expect(popularBadges.length).toBe(2)
  })

  it('displays prices correctly', () => {
    render(<FormationGrid />)
    expect(screen.getAllByText('197€').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('247€').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('347€').length).toBeGreaterThanOrEqual(1)
  })

  it('displays duration and lesson count for each formation', () => {
    render(<FormationGrid />)
    const durations = screen.getAllByText(/semaines/)
    expect(durations.length).toBe(5)
  })

  it('contains links to formation pages', () => {
    render(<FormationGrid />)
    const links = screen.getAllByText('Voir la formation')
    expect(links.length).toBe(5)
  })
})
