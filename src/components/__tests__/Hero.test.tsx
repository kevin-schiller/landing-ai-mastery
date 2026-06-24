import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/Hero'

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByText("Maîtrisez l'IA.")).toBeInTheDocument()
    expect(screen.getByText("Construisez l'avenir.")).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Explorer les formations')).toBeInTheDocument()
    expect(screen.getByText('Voir les packs')).toBeInTheDocument()
  })

  it('renders stat badges', () => {
    render(<Hero />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('4.8/5')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Hero />)
    expect(screen.getByText('Élèves formés')).toBeInTheDocument()
    expect(screen.getByText('Avis moyens')).toBeInTheDocument()
    expect(screen.getByText('Formations')).toBeInTheDocument()
  })
})
