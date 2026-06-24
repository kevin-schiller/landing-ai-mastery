import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from '@/components/Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Ils nous font confiance')).toBeInTheDocument()
  })

  it('renders all 5 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Alexandre Moreau')).toBeInTheDocument()
    expect(screen.getByText('Sophie Lambert')).toBeInTheDocument()
    expect(screen.getByText('Thomas Petit')).toBeInTheDocument()
    expect(screen.getByText('Marie Dubois')).toBeInTheDocument()
    expect(screen.getByText('Lucas Bernard')).toBeInTheDocument()
  })

  it('renders each testimonial role and formation', () => {
    render(<Testimonials />)
    expect(screen.getByText(/CTO, TechFlow/)).toBeInTheDocument()
    expect(screen.getByText(/Data Scientist, NeoTech/)).toBeInTheDocument()
    expect(screen.getByText(/Freelance IA/)).toBeInTheDocument()
    expect(screen.getByText(/Head of Innovation/)).toBeInTheDocument()
    expect(screen.getByText(/Développeur Fullstack/)).toBeInTheDocument()
  })

  it('renders avatar initials', () => {
    render(<Testimonials />)
    expect(screen.getByText('AM')).toBeInTheDocument()
    expect(screen.getByText('SL')).toBeInTheDocument()
    expect(screen.getByText('TP')).toBeInTheDocument()
    expect(screen.getByText('MD')).toBeInTheDocument()
    expect(screen.getByText('LB')).toBeInTheDocument()
  })
})
