import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@/components/ui/Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Test</Badge>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<Badge>Default</Badge>)
    expect(screen.getByText('Default').className).toContain('bg-surface-light')
  })

  it('renders with gold variant', () => {
    render(<Badge variant="gold">Gold</Badge>)
    expect(screen.getByText('Gold').className).toContain('bg-accent/10')
  })

  it('renders with blue variant', () => {
    render(<Badge variant="blue">Blue</Badge>)
    expect(screen.getByText('Blue').className).toContain('bg-primary-light/10')
  })

  it('applies custom className', () => {
    render(<Badge className="custom">Custom</Badge>)
    expect(screen.getByText('Custom').className).toContain('custom')
  })
})
