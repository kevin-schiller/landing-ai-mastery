import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PricingCards } from '@/components/PricingCards'

describe('PricingCards', () => {
  it('renders all 3 packs', () => {
    render(<PricingCards />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('shows popular badge on Pro pack', () => {
    render(<PricingCards />)
    const popularBadges = screen.getAllByText('Le plus populaire')
    expect(popularBadges.length).toBe(1)
  })

  it('shows "--" price for Starter pack', () => {
    render(<PricingCards />)
    expect(screen.getByText('—')).toBeInTheDocument()
  })

  it('shows economy percentage for Pro and Ultimate', () => {
    render(<PricingCards />)
    expect(screen.getByText('Économisez 30%')).toBeInTheDocument()
    expect(screen.getByText('Économisez 40%')).toBeInTheDocument()
  })

  it('displays formation count for each pack', () => {
    render(<PricingCards />)
    expect(screen.getAllByText(/1 formation?/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/3 formations?/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/5 formations?/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders correct button text', () => {
    render(<PricingCards />)
    expect(screen.getByText('Choisir une formation')).toBeInTheDocument()
    expect(screen.getAllByText('Acheter le pack').length).toBe(2)
  })
})
