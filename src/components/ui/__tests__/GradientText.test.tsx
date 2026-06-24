import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GradientText } from '@/components/ui/GradientText'

describe('GradientText', () => {
  it('renders children', () => {
    render(<GradientText>Hello</GradientText>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders as span by default', () => {
    render(<GradientText>Text</GradientText>)
    const el = screen.getByText('Text')
    expect(el.tagName).toBe('SPAN')
  })

  it('renders as h1 when specified', () => {
    render(<GradientText as="h1">Heading</GradientText>)
    expect(screen.getByText('Heading').tagName).toBe('H1')
  })

  it('renders as h2 when specified', () => {
    render(<GradientText as="h2">Subheading</GradientText>)
    expect(screen.getByText('Subheading').tagName).toBe('H2')
  })

  it('renders as h3 when specified', () => {
    render(<GradientText as="h3">Subsubheading</GradientText>)
    expect(screen.getByText('Subsubheading').tagName).toBe('H3')
  })

  it('applies gradient classes', () => {
    render(<GradientText>Gradient</GradientText>)
    expect(screen.getByText('Gradient').className).toContain('bg-gradient-to-r')
  })

  it('applies custom className', () => {
    render(<GradientText className="custom">Styled</GradientText>)
    expect(screen.getByText('Styled').className).toContain('custom')
  })
})
