import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/Header'

describe('Header', () => {
  it('renders brand link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /AI.*Mastery/ })
    expect(link).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Formations')).toBeInTheDocument()
    expect(screen.getByText('Packs')).toBeInTheDocument()
    expect(screen.getByText('Témoignages')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Header />)
    expect(screen.getByText("S'inscrire")).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Menu')
    await userEvent.click(menuButton)
  })
})
