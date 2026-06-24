import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from '@/components/CTA'

describe('CTA', () => {
  it('renders heading', () => {
    render(<CTA />)
    expect(screen.getByText(/Prêt à passer au/)).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<CTA />)
    expect(screen.getByText(/Rejoignez une communauté/)).toBeInTheDocument()
  })

  it('renders both CTAs', () => {
    render(<CTA />)
    expect(screen.getByText('Explorer les formations')).toBeInTheDocument()
    expect(screen.getByText('Nous contacter')).toBeInTheDocument()
  })
})
