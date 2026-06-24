import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CheckoutPage from '@/app/checkout/page'

describe('CheckoutPage', () => {
  it('renders success heading', () => {
    render(<CheckoutPage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Paiement.*réussi/)
  })

  it('renders confirmation message', () => {
    render(<CheckoutPage />)
    expect(screen.getByText(/Merci pour votre confiance/)).toBeInTheDocument()
  })

  it('renders back to home button', () => {
    render(<CheckoutPage />)
    expect(screen.getByText("Retour à l'accueil")).toBeInTheDocument()
  })

  it('renders check icon', () => {
    render(<CheckoutPage />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
