import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProblemSolution } from '@/components/ProblemSolution'

describe('ProblemSolution', () => {
  it('renders section heading', () => {
    render(<ProblemSolution />)
    expect(screen.getByText('Le constat est simple')).toBeInTheDocument()
  })

  it('renders all 3 steps', () => {
    render(<ProblemSolution />)
    expect(screen.getByText('Vous êtes submergé')).toBeInTheDocument()
    expect(screen.getByText('Notre méthode pas-à-pas')).toBeInTheDocument()
    expect(screen.getByText('Des résultats immédiats')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<ProblemSolution />)
    expect(screen.getByText(/L'IA évolue si vite/i)).toBeInTheDocument()
    expect(screen.getByText(/Un parcours structuré/i)).toBeInTheDocument()
    expect(screen.getByText(/Dès la première semaine/i)).toBeInTheDocument()
  })
})
