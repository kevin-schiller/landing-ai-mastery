import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('renders with default variant (primary) and size (md)', () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-gradient-to-r')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-surface-light')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('border-border')
  })

  it('renders with ghost variant', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-transparent')
  })

  it('renders with sm size', () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button').className).toContain('text-sm')
  })

  it('renders with lg size', () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button').className).toContain('text-lg')
  })

  it('fires onClick handler', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('forwards ref to the button element', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Styled</Button>)
    expect(screen.getByRole('button').className).toContain('custom-class')
  })

  it('passes additional HTML attributes', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
